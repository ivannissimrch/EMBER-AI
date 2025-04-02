'use client';
import { FormEvent, useState } from 'react';
import NavigationButtons from '../navigationButtons/NavigationButtons';
import { Inputs, useStoreContext } from '@/app/helpers/StoreContext';
import ResetButton from '../buttons/ResetButton';
import { motion } from 'motion/react';
import { easeInOut } from 'motion';

const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95, rotateX: -10 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.8, delay: 0.2, easeInOut },
    },
};

export default function Form() {
    const { storeValue } = useStoreContext();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    const [activeInput, setActiveInput] = useState(0);
    const inputField = storeValue.inputValues[activeInput];

    return (
        <form onSubmit={handleSubmit} className="flex flex-col  w-full  p-10 items-center  ">
            {/* Form Sections */}

            <motion.div
                variants={variants}
                key={activeInput}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-full"
            >
                <Content
                    input={inputField}
                    activeInput={activeInput}
                    setActiveInput={setActiveInput}
                />
            </motion.div>
        </form>
    );
}

function Content({
    input,
    activeInput,
    setActiveInput,
}: {
    input: Inputs;
    activeInput: number;
    setActiveInput: (idx: number) => void;
}) {
    //                     updateInputsValues(newValue, input.id);
    const { updateInputsValues } = useStoreContext();

    return (
        <div className="flex flex-col items-center text-black ">
            <div className="w-1/2 ">
                <h3>Persona</h3>
                <span className="bg-white">{input.title}</span>
                <div className="bg-[#CAD2C5] rounded-2xl min-h-[211px] flex flex-col items-end p-2">
                    <textarea
                        value={input.question}
                        required
                        name={input.title}
                        className="p-4  w-full flex  flex-auto rounded-md"
                        placeholder={input.title}
                        onChange={(e) => updateInputsValues(e.target.value, input.id)}
                    />

                    <button className="mr-3">
                        <ResetButton />
                    </button>
                </div>

                <NavigationButtons idx={activeInput} setActiveInput={setActiveInput} />
            </div>
        </div>
    );
}
