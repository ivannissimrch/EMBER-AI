/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react';
import { useStoreContext } from '@/app/helpers/StoreContext';
import ResetButton from '../buttons/ResetButton';
import NavigationButtons from '../navigationButtons/NavigationButtons';
import AnimationContainer from '../animationContainer/AnimationContainer';
import ErrorMessage from '../alertMessage/ErrorMessage';

export default function Form({
    activeInput,
    setActiveInput,
    isError,
    setIsError,
}: {
    activeInput: number;
    setActiveInput: Dispatch<SetStateAction<number>>;
    isError: boolean;
    setIsError: Dispatch<SetStateAction<boolean>>;
}) {
    const { storeValue, updateInputsValues, clearInputValue } = useStoreContext();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    const inputField = storeValue.inputValues[activeInput];
    const [isInvalid, setIsInvalid] = useState(true);

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
                    <div className="w-full sm:w-1/2 ">
                        <h3 className="text-2xl font-bold">{inputField.title}</h3>
                        <p className=" mb-2">{inputField.description}</p>
                        <div
                            className={`border ${borderColor} bg-white rounded-2xl min-h-[211px] flex flex-col items-end p-2`}
                        >
                            <textarea
                                value={inputField.question}
                                name={inputField.title}
                                className="p-4  w-full flex  flex-auto rounded-md "
                                placeholder={inputField.placeHolder}
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
                            userInput={inputField}
                            setIsError={setIsError}
                        />
                    </div>
                </div>
            </AnimationContainer>
        </form>
    );
}
