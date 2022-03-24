import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  CalendarToday,
  CreateSharp,
  DetailsSharp,
  MonetizationOnSharp,
} from '@material-ui/icons';

import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },

  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});
function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed, icon } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icon}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

export default function HorizontalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [isSaved, setIsSaved] = React.useState(false);
  const { steps,viewOnly } = props;
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return steps[0].content;
      case 1:
        return steps[1].content;
      case 2:
        return steps[2].content;
      case 3:
        return steps[3].content;
      default:
        return 'Unknown stepIndex';
    }
  }
  const isStepOptional = step => step === 1;

  const isStepSkipped = step => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleSave = () => {
    setIsSaved(true);
  }
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }

          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel
                StepIconProps={step}
                StepIconComponent={ColorlibStepIcon}
                {...labelProps}
              >
                {step.label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div style={{display:'flex',alignItems:'center'}}>
        {activeStep === steps.length ? (
          <div>
            {
              !viewOnly ?  <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
              : null
            }
           
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>

{
  !viewOnly ? 
    <>
    <Button
    variant="contained"
    color="primary"
    onClick={handleNext}
    className={classes.button}
  >
    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
  </Button>
  <Button variant="contained" color="primary" onClick={handleSave}>
    Save
  </Button>
  </>
  : <Button
  variant="contained"
  color="primary"
  onClick={handleNext}
  className={classes.button}
>
  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
</Button>
}
             
            </div>
          </div>
        )}
      </div>
      {isSaved ? (
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <Typography className={classes.instructions}>All steps saved</Typography>
          </div>) : null
      }
    </div>
  );
}
