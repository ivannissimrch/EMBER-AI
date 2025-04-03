import Link from 'next/link';

interface NavigationButtonsProps {
    idx: number;
    setActiveInput: Function;
}

export default function NavigationButtons({ idx, setActiveInput }: NavigationButtonsProps) {
    const changeInput = (index: number) => {
        if (index < 0) return;
        if (index > 5) return;
        setActiveInput(index);
    };

    return (
        <div>
            <div className="flex justify-between">
                {idx > 0 ? (
                    <ButtonDirection
                        text="Back"
                        active={idx > 0}
                        onClick={() => changeInput(idx - 1)}
                    />
                ) : (
                    <span></span>
                )}

                {idx < 4 && (
                    <ButtonDirection
                        text="Next"
                        active={idx < 4}
                        onClick={() => changeInput(idx + 1)}
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

interface ButtonDirectionType {
    text: string;
    active: boolean;
    onClick: () => void;
}

function ButtonDirection({ text, active, onClick }: ButtonDirectionType) {
    return (
        <button
            className={`mt-4 flex justify-end   text-white font-bold py-2 px-10 rounded-4xl ${
                active ? 'bg-[#61529D] hover:bg-[#7163aa] cursor-pointer' : 'bg-blue-100'
            }`}
            onClick={onClick}
            disabled={!active}
        >
            {text}
        </button>
    );
}
