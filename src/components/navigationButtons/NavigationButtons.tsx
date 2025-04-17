import Link from 'next/link';
import { ButtonDirection } from '../buttons/ButtonDirection';
import { Dispatch, SetStateAction } from 'react';
import InspireMeButton from '../inspireMeButton/InspireMeButton';

interface NavigationButtonsProps {
    idx: number;
    setActiveInput: Dispatch<SetStateAction<number>>;
    userInput: string;
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

    return (
        <div>
            <InspireMeButton />
            <div className="flex justify-between">
                {idx > 0 ? (
                    <ButtonDirection
                        text="Back"
                        active={idx > 0}
                        onClick={() => {
                            const prevInput = idx - 1;
                            changeInput(prevInput);
                            if (userInput[prevInput] !== '') {
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
                            if (userInput === '') {
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
            <div className="flex justify-center mt-2">
                {idx == 4 && (
                    <Link
                        href="/review"
                        className="flex justify-center items-center px-16 rounded-4xl py-2  h-12 bg-[#61529D] text-white  cursor-pointer"
                    >
                        Review
                    </Link>
                )}
            </div>
        </div>
    );
}
