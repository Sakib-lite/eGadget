const express = require('express');
const next = require('next');
const connectToDatabase = require('./../utils/db');
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const morgan = require('morgan');
const app = next({ dev });
const handle = app.getRequestHandler();
const helmet = require('helmet');

const laptopRoutes = require('./routes/laptopRoutes');
const mobileRoutes = require('./routes/mobileRoutes');
const dotenv = require('dotenv');
const errorHandler = require('./controllers/errorController');
const Error = require('./../utils/appError');

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.json());
    connectToDatabase();

    //middlewares
    //server.get will only be called for GET requests
    //server.use only see whether url starts with specified path;
    //server.all will match complete path.

    process.env.NODE_ENV === 'development' ? server.use(morgan('dev')) : '';
    // server.use(helmet());
    
    dotenv.config({ path: './../.env' });
    //routes
    server.use('/api/catagory/laptop', laptopRoutes);
    server.use('/api/catagory/mobile', mobileRoutes);
    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.use(errorHandler);

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Server running at localhost:${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
  });
