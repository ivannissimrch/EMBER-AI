'use client';
import { FormEvent, useEffect, useState } from 'react';

import { useStoreContext } from '@/app/helpers/StoreContext';

import ResetButton from '../buttons/ResetButton';
import NavigationButtons from '../navigationButtons/NavigationButtons';
import AnimationContainer from '../animationContainer/AnimationContainer';
import ErrorMessage from '../alertMessage/ErrorMessage';

export default function Form({
    activeInput,
    setActiveInput,
}: {
    activeInput: number;
    setActiveInput: Function;
}) {
    const { storeValue, updateInputsValues, clearInputValue } = useStoreContext();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    // const [activeInput, setActiveInput] = useState(0);
    const inputField = storeValue.inputValues[activeInput];

    const [isInvalid, setIsInvalid] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (inputField.question === '') {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
    }, [inputField.question]);

    const borderColor = isError ? 'border-custom-red' : 'border-black';

    return (
        <form onSubmit={handleSubmit} className="flex flex-col  w-full  p-10 items-center  ">
            <AnimationContainer index={activeInput}>
                <div className="flex flex-col items-center text-black ">
                    <div className="w-1/2 ">
                        <h3 className="text-2xl font-bold">{inputField.title}</h3>
                        <p className=" mb-2">{inputField.description}</p>
                        <div
                            className={`border ${borderColor} bg-white rounded-2xl min-h-[211px] flex flex-col items-end p-2`}
                        >
                            <textarea
                                value={inputField.question}
                                // required
                                name={inputField.title}
                                className="p-4  w-full flex  flex-auto rounded-md "
                                placeholder={inputField.title}
                                onChange={(e) => updateInputsValues(e.target.value, inputField.id)}
                            />

                            <button onClick={() => clearInputValue(inputField.id)} className="mr-3">
                                <ResetButton />
                            </button>
                        </div>
                        {isError && <ErrorMessage />}
                        <NavigationButtons
                            idx={activeInput}
                            setActiveInput={setActiveInput}
                            userInput={inputField.question}
                            setIsError={setIsError}
                        />
                    </div>
                </div>
            </AnimationContainer>
        </form>
    );
}
