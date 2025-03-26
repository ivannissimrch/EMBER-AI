"use client";

import { Inputs } from "@/app/promptInput/page";
import { FormEvent } from "react";
import NavigationButtons from "../navigationButtons/NavigationButtons";
import AnimationContainer from "../animationContainer/AnimationContainer";

interface FormProps {
  inputs: Inputs[];
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
}

export default function Form({ inputs, handleNext, handleBack }: FormProps) {
  function scrollToNextComponent(input: Inputs, idx: number) {
    inputs[idx + 1].inputRef.current?.scrollIntoView({
      behavior: "smooth",
    });
    handleNext();
  }

  function scrollToPrevComponent(input: Inputs, idx: number) {
    inputs[idx - 1].inputRef.current?.scrollIntoView({
      behavior: "smooth",
    });
    handleBack();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  w-full  p-10 items-center"
    >
      {/* Form Sections */}
      {inputs.map((input, idx) => (
        <AnimationContainer key={input.title} input={input} idx={idx}>
          <div className="flex flex-col items-center text-black">
            <label className="bg-white  m-2">{input.title}</label>
            <input
              type="text"
              required
              name={input.title}
              className="p-4 bg-[#CAD2C5] w-1/2 flex"
              placeholder={input.title}
            />
            {/* Buttons */}
            <NavigationButtons
              idx={idx}
              scrollToNextComponent={scrollToNextComponent}
              scrollToPrevComponent={scrollToPrevComponent}
              input={input}
            />
          </div>
        </AnimationContainer>
      ))}
    </form>
  );
}
