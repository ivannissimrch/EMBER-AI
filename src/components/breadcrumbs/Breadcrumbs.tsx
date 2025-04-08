import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

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
            <Stepper activeStep={activeStep} className="text-blue-500">
                {steps.map((label, idx) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    return (
                        <Step
                            key={label}
                            className="cursor-pointer"
                            {...stepProps}
                            // onClick={() => handleStepperClick(idx)}
                        >
                            <StepLabel {...labelProps} onClick={() => handleStepperClick(idx)}>
                                {label}
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    );
}
