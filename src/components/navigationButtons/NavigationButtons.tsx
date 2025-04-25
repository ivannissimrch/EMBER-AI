'use client';
import { ButtonDirection } from '../buttons/ButtonDirection';
import { Dispatch, SetStateAction } from 'react';
import InspireMeButton from '../inspireMeButton/InspireMeButton';
import { Inputs, useStoreContext } from '@/app/helpers/StoreContext';
import { useRouter } from 'next/navigation';

interface NavigationButtonsProps {
    idx: number;
    setActiveInput: Dispatch<SetStateAction<number>>;
    userInput: Inputs;
    setIsError: Dispatch<SetStateAction<boolean>>;
}

export default function NavigationButtons({
    idx,
    setActiveInput,
    userInput,
    setIsError,
}: NavigationButtonsProps) {
    const changeInput = (index: number) => {
        if (index < 0) return;
        if (index > 5) return;
        setActiveInput(index);
    };

    const { storeValue } = useStoreContext();
    const router = useRouter();

    return (
        <div>
            <InspireMeButton activeUserInput={userInput} />
            <div className="flex justify-between">
                {idx > 0 ? (
                    <ButtonDirection
                        text="Back"
                        active={idx > 0}
                        onClick={() => {
                            const prevInput = idx - 1;
                            changeInput(prevInput);
                            if (storeValue.inputValues[prevInput].question !== '') {
                                setIsError(false);
                            }
                        }}
                    />
                ) : (
                    <span></span>
                )}

                {idx < 4 && (
                    <ButtonDirection
                        text="Next"
                        active={idx < 4}
                        onClick={() => {
                            if (userInput.question === '') {
                                setIsError(true);
                                return;
                            } else {
                                setIsError(false);
                                changeInput(idx + 1);
                            }
                        }}
                    />
                )}
            </div>
            <div className="flex justify-center  mt-4 sm:mt-2">
                {idx == 4 && (
                    <button
                        type="submit"
                        onClick={(event) => {
                            if (userInput.question === '') {
                                event.preventDefault();
                                setIsError(true);
                            } else {
                                router.push('/review');
                            }
                        }}
                        className="flex justify-center items-center px-16 rounded-4xl py-2  h-12 bg-[#61529D] text-white  cursor-pointer"
                    >
                        Review
                    </button>
                )}
            </div>
        </div>
    );
}
