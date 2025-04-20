'use client';
import Form from '@/components/form/Form';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import { RefObject, useRef, useState } from 'react';
import { useStoreContext } from '../helpers/StoreContext';
export interface Inputs {
    title: string;
    inputRef: RefObject<HTMLDivElement | null>;
}

export default function PromptInput() {
    const personaRef = useRef<HTMLDivElement | null>(null);
    const contextRef = useRef<HTMLDivElement | null>(null);
    const taskRef = useRef<HTMLDivElement | null>(null);
    const outputRef = useRef<HTMLDivElement | null>(null);
    const constrainRef = useRef<HTMLDivElement | null>(null);

    const inputs: Inputs[] = [
        { title: 'Persona', inputRef: personaRef },
        { title: 'Context', inputRef: contextRef },
        { title: 'Task', inputRef: taskRef },
        { title: 'Output', inputRef: outputRef },
        { title: 'Constraint', inputRef: constrainRef },
    ];

    const { storeValue } = useStoreContext();
    const [activeStep, setActiveStep] = useState(0);
    const [isError, setIsError] = useState(false);

    function handleStepperClick(index: number) {
        const firstEmptyInputIndex = storeValue.inputValues.findIndex(
            (input) => input.question === ''
        );
        const prevIndex = index - 1;
        if (prevIndex >= 0 && index >= firstEmptyInputIndex) {
            if (storeValue.inputValues[firstEmptyInputIndex].question === '') {
                setActiveStep(firstEmptyInputIndex);
                setIsError(true);
                return;
            }
        }
        if (storeValue.inputValues[index].question !== '') {
            setIsError(false);
        }
        setActiveStep(index);
    }

    return (
        <div className="h-full ">
            <div className="w-2/3 justify-self-center">
                <Breadcrumbs
                    steps={inputs.map((input) => input.title)} // ["Persona", "Context", ....]
                    activeStep={activeStep} // 0 -> 1 -> 2
                    handleStepperClick={handleStepperClick}
                />
            </div>

            <div className="">
                <Form
                    activeInput={activeStep}
                    setActiveInput={setActiveStep}
                    isError={isError}
                    setIsError={setIsError}
                />
            </div>
        </div>
    );
}
