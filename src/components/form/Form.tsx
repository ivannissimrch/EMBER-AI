"use client";

import { useRef } from "react";
import { Inputs } from "@/app/promptInput/page";

export default function Form({ inputs }: { inputs: Inputs[] }) {
  // const [aiMessage, setAiMessage] = useState("");
  // const submitRef = useRef<HTMLButtonElement | null>(null);

  function scrollToComponent(input: Inputs, idx: number) {
    // if (idx === inputs.length - 1) {
    //   submitRef.current?.scrollIntoView({ behavior: "smooth" });
    //   return;
    // }
    inputs[idx + 1].inputRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <form
      onSubmit={async (event) => {
        event?.preventDefault();
      }}
      className="flex flex-col  w-full  p-10 items-center"
    >
      {inputs.map((input, idx) => (
        <div
          key={input.title}
          className={`${
            idx === 0 ? "h-[40vh]" : "h-[50vh]"
          } w-full flex flex-col justify-center`}
          ref={input.inputRef}
        >
          <div className="flex flex-col items-center text-black">
            <label className="bg-white  m-2">{input.title}</label>
            <input
              type="text"
              required
              name={input.title}
              className="p-4 bg-[#CAD2C5] w-1/2"
              placeholder={input.title}
            />
            {idx < inputs.length - 1 ? (
              <button
                type="button"
                onClick={() => scrollToComponent(input, idx)}
              >
                Next
              </button>
            ) : (
              <button
                // ref={submitRef}
                className=" w-1/2 p-4 m-2 h-12  text-black underline"
              >
                ReView
              </button>
            )}
          </div>
        </div>
      ))}
    </form>
  );
}
