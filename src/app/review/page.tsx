'use client';
import { useEffect, useState } from 'react';
import { useStoreContext } from '../helpers/StoreContext';
import Link from 'next/link';
import { generateResponse } from '@/util/api';

export default function Review() {
    const { storeValue } = useStoreContext();

    const [combineInputs, setCombileInputs] = useState<string>('');
    const [disabled, setDisabled] = useState<boolean>(true);
    const [geminiResonse, setGeminiResponse] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const result = storeValue.inputValues.map((input) => input.question).join('\n');
        setCombileInputs(result);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = async () => {
        setLoading(true);
        const response = await generateResponse(combineInputs);
        setLoading(false);
        setGeminiResponse(response as string);
    };

    return (
        <section className="text-black flex flex-col items-center h-full overflow-y-auto">
            <h1 className="mt-[49px] text-[36px] font-[Open_Sans] font-normal leading-[normal]">
                Prompt Review
            </h1>

            <section className="flex flex-col mt-[58px]">
                <Link href="/promptInput">Back</Link>
                <div className="flex flex-col mt-[62px]  bg-gray-300  rounded-4xl">
                    <textarea
                        disabled={disabled}
                        className={`w-[1080px] h-[326px]  p-[40px] ${
                            disabled ? 'text-gray-400' : 'text-black'
                        }`}
                        value={combineInputs}
                        onChange={(e) => setCombileInputs(e.target.value)}
                    />
                    <button onClick={() => setDisabled(!disabled)} className="p-2 cursor-pointer">
                        Edit Prompt Area
                    </button>
                </div>
            </section>

            <button
                className="mt-[80px] w-[245px] h-[60px] bg-gray-300 cursor-pointer"
                onClick={handleSubmit}
            >
                Generate Prompt
            </button>

            <div className="flex flex-col my-[62px] ">
                <h3 className="mb-4">Ember Response</h3>
                <div className=" w-[1080px] p-4 bg-gray-300  rounded-4xl">
                    {geminiResonse ? (
                        <p>{geminiResonse}</p>
                    ) : (
                        <p>{loading ? 'Loading..' : 'Ask your question in the prompt'}</p>
                    )}
                </div>
            </div>
        </section>
    );
}
