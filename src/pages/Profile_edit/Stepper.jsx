import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

import { Name_step } from './steper_compo/Name_step';
import { Profession_step } from './steper_compo/Profession_step';
import { Skills_step } from './steper_compo/Skills_step';
import { Category_step } from './steper_compo/Category_step';
import Country_step from './steper_compo/Country_step';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext, useState } from 'react';
import { Avatar, CardActionArea, Chip, Tooltip, Typography } from '@mui/material';
import { ArrowLeft, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = ['Name', 'Profession', 'Category', 'Skills', 'Country'];

export default function HorizontalStepperWithError() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const navigate = useNavigate();
  const {user, createAccount_mongo,loginMongo, createUserOnMongo,isCreatingOnMongo_loading  } = useContext(AuthContext);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  const handleSubmit = () => {
    if (createAccount_mongo?.fullName && createAccount_mongo?.profession && createAccount_mongo?.skills?.length === 5 && createAccount_mongo?.category && createAccount_mongo?.country) {
      // console.log("submitting");
      // console.log(createAccount_mongo);
      createUserOnMongo(createAccount_mongo);
      navigate("/")
        // console.log(user);
        

    }
  };

  const stepData = () => {
    if (activeStep === 0) {
      return <Name_step />;
    } else if (activeStep === 1) {
      return <Profession_step/>;
    } else if (activeStep === 2) {
      return <Category_step/>;
    } else if (activeStep === 3) {
      return < Skills_step />;
    } else if (activeStep === 4) {
      return <Country_step />;
    }
  };

  const isNextDisabled = () => {
    if (activeStep === 1 && !createAccount_mongo?.profession) {
      return true;
    } else if (activeStep === 2 && !createAccount_mongo?.category) {
      return true;
    } else if (activeStep === 3 && createAccount_mongo?.skills?.length !== 5) {
      return true;
    } else if (activeStep === 4 && !createAccount_mongo?.country) {
      return true;
    }
    return false;
  };

  return (
    <Box sx={{ width: { md: 600, xs: 1 } }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Box sx={{ display: 'flex', flexDirection: 'column', py: 8, width: 350 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <CardActionArea sx={{ height: "fit-content", width: "fit-content", borderRadius: 999, mb: 3, mr: 3 }}>
                <Avatar
                  src={createAccount_mongo?.profilePic}
                  sx={{ height: 100, width: 100, outline: "4px solid royalblue", outlineOffset: "4px" }}
                ></Avatar>
              </CardActionArea>

              <Box>
                <Typography sx={{ fontWeight: "bold", cursor:"pointer" }} variant="h4">
                  {createAccount_mongo?.fullName}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#777", display: "flex", mt: "-8px", alignItems: "center" }}
                >
                  {createAccount_mongo?.profession}
                </Typography>
                <Typography
                  sx={{ color: "#777", display: "flex", alignItems: "center" }}
                  variant="subtitle1"
                  p={0}
                >
                  <MapPin size={18} />
                  {createAccount_mongo.country?.label}

                  <Tooltip title={createAccount_mongo.country?.label} placement="top">
                    <Box sx={{ display: "flex", alignItems: "center", px: 1 }}>
                      <img
                        style={{
                          borderRadius: 3,
                          border: "1px solid #77777750",
                          boxShadow: "10px 10px 10px solid black",
                        }}
                        src={`https://flagcdn.com/w20/${createAccount_mongo.country?.code.toLowerCase()}.png`}
                      />
                    </Box>
                  </Tooltip>
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {createAccount_mongo.skills.map((skill, index) => (
                <Chip
                  onClick={() => { console.log("clicked"); }}
                  key={index}
                  sx={{ m: 0.5, borderRadius: 3 }}
                  label={skill}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, width:1 }}>
            <Box sx={{ 
              flex: '1 1 auto',
               }} />

            <Button
              // variant='contained' 
              sx={{ borderRadius: 3, mr: 1 }}
              // color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>


            <Button
              variant='contained' sx={{ borderRadius: 3, mr: 1 }}
              onClick={handleSubmit}>{isCreatingOnMongo_loading ? "Creating..." :"Create Account"} </Button>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ p: 3, py: 8 }}>
            {stepData()}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              variant='contained' sx={{ borderRadius: 3, mr: 1 }}
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              <ArrowLeft size={18} style={{marginRight:2}}/>
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button
              variant='contained' sx={{ borderRadius: 3 }}
              onClick={handleNext}
              disabled={isNextDisabled()}
            >
              {isCreatingOnMongo_loading ? "Creating..." : activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              {/* {activeStep === steps.length - 1 ? 'Finish' : 'Next'} */}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
