const express = require('express');
const next = require('next');
const db = require('./../utils/db');
const PORT = process.env.PORT || 3001;
const dev = process.env.NODE_ENV !== 'production';
// const morgan = require('morgan');
const app = next({ dev });
const handle = app.getRequestHandler();
// const helmet = require('helmet');
const cors = require('cors');
const laptopRoutes = require('./routes/laptopRoutes');
const mobileRoutes = require('./routes/mobileRoutes');
const dotenv = require('dotenv');
const errorHandler = require('./controllers/errorController');
// const session = require('express-session')
const cookieParser = require('cookie-parser');
// const Error = require('./../utils/appError');

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(cookieParser())
     db.connect()
 dotenv.config({ path: './../.env' });
    //middlewares
    //server.get will only be called for GET requests
    //server.use only see whether url starts with specified path;
    //server.all will match complete path.
 
    // process.env.NODE_ENV === 'development' ? server.use(morgan('dev')) : '';
    // server.use(helmet());
    
    server.use(cors({
      origin: "http://localhost:3001",
      credentials: true,
    }));

    //routes
    server.use('/api/product/laptop', laptopRoutes);
    server.use('/api/product/mobile', mobileRoutes);
    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.use(errorHandler);

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Server running at http://localhost:${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
  });
