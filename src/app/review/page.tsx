"use client"
import { useStoreContext } from "../helpers/StoreContext";
import Link from "next/link";

export default function Review() {
  const { storeValue } = useStoreContext();

  const combineInputs = storeValue.inputValues.map((input) => input.question).join("\n");

  return (
    <section className="text-black flex flex-col items-center h-full overflow-y-auto">
      <h1 className="mt-[49px] text-[36px] font-[Open_Sans] font-normal leading-[normal]">
        Prompt Review
      </h1>

      <section className="flex flex-col mt-[58px]">
        <Link
        href="/promptInput"
        >Back</Link>
        <div className="flex flex-col mt-[62px]  bg-gray-300  rounded-4xl">
          <textarea className="w-[1080px] h-[326px]  p-[40px]" 
                    value={combineInputs}
          />
          <button>Edit Prompt Area</button>
        </div>
      </section>
      <button className="mt-[80px] w-[245px] h-[60px] bg-gray-300 ">
        Generate Prompt
      </button>
    </section>
  );
}
