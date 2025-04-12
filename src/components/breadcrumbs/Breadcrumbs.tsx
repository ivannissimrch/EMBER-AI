import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepIcon } from '@mui/material';

interface StepperPros {
    steps: string[];
    activeStep: number;
    // handleNext: () => void;
    // handleBack: () => void;
    // handleReset: () => void;
    handleStepperClick: (idx: number) => void;
}

export default function Breadcrumbs({
    steps, //
    activeStep,
    // handleNext,
    // handleBack,
    // handleReset,
    handleStepperClick,
}: StepperPros) {
    return (
        <Box className="w-full p-4 rounded">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, idx) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    return (
                        <Step
                            key={label}
                            sx={{
                                '& .MuiStepLabel-root .Mui-completed': {
                                    color: '#cddcee',
                                },
                                '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                                    {
                                        color: 'black',
                                    },
                                '& .MuiStepLabel-root .Mui-active': {
                                    color: '#cddcee',
                                },
                                '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
                                    color: 'black',
                                },
                                '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                                    fill: 'black',
                                },
                            }}
                            className="cursor-pointer"
                            {...stepProps}
                        >
                            <StepLabel {...labelProps} onClick={() => handleStepperClick(idx)}>
                                {label}
                            </StepLabel>
                            <StepIcon icon={undefined} />
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    );
}
