"use client";
import { FormEvent } from "react";
import NavigationButtons from "../navigationButtons/NavigationButtons";
import AnimationContainer from "../animationContainer/AnimationContainer";
import { useStoreContext } from "@/app/helpers/StoreContext";

export default function Form() {
  const { storeValue, updateInputsValues, clearInputValue } = useStoreContext();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  w-full  p-10 items-center"
    >
      {/* Form Sections */}
      {storeValue?.inputValues.map((input, idx) => (
        <AnimationContainer key={input.title} input={input} idx={idx}>
          <div
            className="flex flex-col items-center text-black"
            ref={storeValue.inputValues[idx].inputRef}
          >
            <label className="bg-white  m-2">{input.title}</label>
            <input
              onChange={(event) => {
                const newValue = event.target.value;
                updateInputsValues(newValue, input.id);
              }}
              value={input.question}
              type="text"
              required
              name={input.title}
              className="p-4 bg-[#CAD2C5] w-1/2 flex"
              placeholder={input.title}
            />
            <button type="button" onClick={() => clearInputValue(input.id)}>
              clear
            </button>
            {/* Buttons */}
            <NavigationButtons idx={idx} input={input} />
          </div>
        </AnimationContainer>
      ))}
    </form>
  );
}
