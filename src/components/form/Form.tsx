"use client";
import { FormEvent, useRef, useState } from "react";
import NavigationButtons from "../navigationButtons/NavigationButtons";
import AnimationContainer from "../animationContainer/AnimationContainer";
import { useStoreContext } from "@/app/helpers/StoreContext";
import ResetButton from "../buttons/ResetButton";

export default function Form({
  handleNext, 
  handleBack
}) {
  
  const {
    storeValue,
    updateInputsValues,
    clearInputValue,
    scrollToNextComponent,
  } = useStoreContext();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeInput, setActiveInput] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    storeValue.inputValues.map(() => null)
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  w-full  p-10 items-center"
    >
      {/* Form Sections */}
      {storeValue.inputValues.map((input, idx) => (
        <AnimationContainer key={input.title} input={input} idx={idx}>
          <div className="flex flex-col items-center text-black">
            <label className="bg-white  m-2">{input.title}</label>
            <input
              onChange={(event) => {
                const newValue = event.target.value;
                updateInputsValues(newValue, input.id);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" && input.question !== "") {
                  event.preventDefault();
                  scrollToNextComponent(input, idx);
                  const nextInput = idx + 1;
                  if (nextInput < inputRefs.current.length) {
                    inputRefs.current[nextInput]?.focus();
                  }
                  setActiveInput(idx + 1);
                }
              }}
              ref={(el) => {
                inputRefs.current[idx] = el;
              }}
              value={input.question}
              type="text"
              required
              name={input.title}
              className="p-4 bg-[#CAD2C5] w-1/2 flex"
              placeholder={input.title}
            />

            <button type="button" onClick={() => clearInputValue(input.id)}>
              <ResetButton />
            </button>
            {/* Buttons */}
            <NavigationButtons idx={idx} input={input} handleBack={handleBack} handleNext={handleNext} />
          </div>
        </AnimationContainer>
      ))}
    </form>
  );
}
