import { Inputs, useStoreContext } from "@/app/helpers/StoreContext";
import { useRouter } from "next/navigation";
import AlertMessage from "../alertMessage/AlertMessage";
import { useState } from "react";

interface NavigationButtonsProps {
  idx: number;
  input: Inputs;
}

export default function NavigationButtons({
  idx,
  input,
}: NavigationButtonsProps) {
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();
  const { scrollToNextComponent, scrollToPrevComponent } = useStoreContext();
  const FIRST_INPUT_INDEX = 0;
  const LAST_INPUT_INDEX = 4;

  function closeAlert() {
    setShowAlert(false);
  }
  function NextButton({ input, idx }: { input: Inputs; idx: number }) {
    return (
      <>
        <button
          className="w-1/4 mt-4 flex justify-end bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={() => {
            if (input.question === "") {
              setShowAlert(true);
              return;
            }
            console.log(idx); //temporarily here for troubleshooting purposes
            scrollToNextComponent(input, idx);
          }}
        >
          Next
        </button>
        <AlertMessage showAlert={showAlert} closeAlert={closeAlert} />
      </>
    );
  }

  function BackButton({ input, idx }: { input: Inputs; idx: number }) {
    return (
      <button
        className={`${
          idx === 0 ? "hidden" : "visible"
        } w-1/4 flex justify-start bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4`}
        type="button"
        onClick={() => {
          scrollToPrevComponent(input, idx);
        }}
      >
        Back
      </button>
    );
  }

  function ReviewButton() {
    return (
      <button
        onClick={() => {
          if (input.question === "") {
            alert("please enter some text");
            return;
          }
          router.push("/review");
        }}
        className="flex w-full justify-end p-4 m-2 h-12  text-black underline"
      >
        ReView
      </button>
    );
  }

  return idx === FIRST_INPUT_INDEX ? (
    <div className="w-1/2 flex justify-evenly">
      <div className=" w-full flex ">
        <button>Inspire Me</button>
      </div>

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
  );
}
