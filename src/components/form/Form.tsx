"use client";

import { Inputs } from "@/app/promptInput/page";
import { motion } from "motion/react";

import Link from "next/link";
import { FormEvent } from "react";

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

  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  function NextButton({ input, idx }: { input: Inputs; idx: number }) {
    return (
      <button
        className="w-1/4 mt-4 flex justify-end bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => scrollToNextComponent(input, idx)}
      >
        Next
      </button>
    );
  }

  function BackButton({ input, idx }: { input: Inputs; idx: number }) {
    return (
      <button
        className={`${
          idx === 0 ? "hidden" : "visible"
        } w-1/4 flex justify-start bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4`}
        type="button"
        onClick={() => scrollToPrevComponent(input, idx)}
      >
        Back
      </button>
    );
  }

  function ReviewButton() {
    return (
      <Link
        href="review"
        className="flex w-full justify-end p-4 m-2 h-12  text-black underline"
      >
        ReView
      </Link>
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  const FIRST_INPUT_INDEX = 0;
  const LAST_INPUT_INDEX = inputs.length - 1;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  w-full  p-10 items-center"
    >
      {/* inputs components */}
      {inputs.map((input, idx) => (
        <motion.div
          key={input.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={variants}
          className="w-full"
        >
          <section
            className={`${
              idx === FIRST_INPUT_INDEX ? "h-[90vh]" : "h-[100vh]"
            } w-full flex flex-col justify-center`}
            ref={input.inputRef}
          >
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

              {idx === FIRST_INPUT_INDEX ? (
                <div className="w-1/2 flex justify-end">
                  {" "}
                  <NextButton idx={idx} input={input} />
                </div>
              ) : idx === LAST_INPUT_INDEX ? (
                <div className=" w-1/2">
                  <BackButton idx={idx} input={input} /> <ReviewButton />{" "}
                </div>
              ) : (
                <div className="w-1/2 flex justify-evenly">
                  <div className=" w-full flex ">
                    <BackButton idx={idx} input={input} />
                  </div>
                  <div className="flex justify-end w-full">
                    <NextButton idx={idx} input={input} />
                  </div>
                </div>
              )}
            </div>
          </section>
        </motion.div>
      ))}
    </form>
  );
}
