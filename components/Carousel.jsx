import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Image from 'next/image';
import earbud2 from './../public/carousel/earbud2.jpg';
import headphone from './../public/carousel/headphone.jpg';
import gadgetImage from './../public/carousel/gadgets.jpg';
import product1 from './../public/carousel/product1.jpg';
import { useStyles } from '../utils/styles';
// import { Store } from '../utils/store/Store';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  { label: 'Best Product', image: earbud2 },
  {
    label: 'Buy Laptop At Best Price',
    image: headphone,
  },
  { label: 'Best Gadget', image: product1 },
  {
    label: 'Buy Gadgets At Best Price',
    image: gadgetImage,
  },
];

export default function Carousel() {
  // const { state } = React.useContext(Store);
  // const { darkMode } = state;
  // const bg=darkMode ? 'bg-gray-800':'bg-gray-100';
  // const darkProperty= darkMode ? `text-gray-400 bg-gray-800`:`text-gray-600 bg-gray-100`;

  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      {/* <Paper
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography
          fontSize='3rem'
          fontFamily='initial'
          variant='h2'
          className={`${classes.carouselHeader} bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100`}
        >
          {images[activeStep].label}
        </Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  height: '100%',
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
                className={classes.centerComponent}
              >
                <div className='bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden'>
                  <div className='container mx-auto px-6 flex relative py-16'>
                    <div className='sm:w-2/3 lg:w-2/5 flex flex-col relative z-20'>
                      <h1 className='font-bebas-neue uppercase text-3xl sm:text-4xl md:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800'>
                        Be on
                        <span className='text-3xl sm:text-4xl md:text-7xl'>Time</span>
                      </h1>
                      <p className='text-sm sm:text-base text-gray-700 dark:text-white'>
                        Dimension of reality that makes change possible and
                        understandable. An indefinite and homogeneous
                        environment in which natural events and human existence
                        take place.
                      </p>
                      <div className='flex mt-8'>
                        <a
                          href='#'
                          className='uppercase md:py-2 md:px-4 py-1 px-2 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400'
                        >
                          Get started
                        </a>
                        <a
                          href='#'
                          className='uppercase md:py-2 md:px-4 py-1 px-2 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md'
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                    <div className='hidden md:block sm:w-1/3 lg:w-3/5 relative items-center'>
                      <Image
                        layout='responsive'
                        alt={step.label}
                        src={step.image}
                        width='50%'
                        height='30%'
                        priority={true}
                      />
                    </div>
                  </div>
                </div>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        className='bg-gray-100 dark:bg-gray-800'
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        nextButton={
          <Button
            size='small'
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
