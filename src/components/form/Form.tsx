'use client';
import { FormEvent, useState } from 'react';

import { useStoreContext } from '@/app/helpers/StoreContext';

import ResetButton from '../buttons/ResetButton';
import NavigationButtons from '../navigationButtons/NavigationButtons';
import AnimationContainer from '../animationContainer/AnimationContainer';

export default function Form() {
    const { storeValue, updateInputsValues } = useStoreContext();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    const [activeInput, setActiveInput] = useState(0);
    const inputField = storeValue.inputValues[activeInput];

    return (
        <form onSubmit={handleSubmit} className="flex flex-col  w-full  p-10 items-center  ">
            <AnimationContainer index={activeInput}>
                <div className="flex flex-col items-center text-black ">
                    <div className="w-1/2 ">
                        <h3 className="text-2xl font-bold">{inputField.title}</h3>
                        <p className="bg-white mb-2">{inputField.description}</p>
                        <div className="bg-[#CAD2C5] rounded-2xl min-h-[211px] flex flex-col items-end p-2">
                            <textarea
                                value={inputField.question}
                                required
                                name={inputField.title}
                                className="p-4  w-full flex  flex-auto rounded-md"
                                placeholder={inputField.title}
                                onChange={(e) => updateInputsValues(e.target.value, inputField.id)}
                            />

                            <button className="mr-3">
                                <ResetButton />
                            </button>
                        </div>

                        <NavigationButtons idx={activeInput} setActiveInput={setActiveInput} />
                    </div>
                </div>
            </AnimationContainer>
        </form>
    );
}
