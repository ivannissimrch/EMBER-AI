import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-custom-background h-full content-center">
      <div className="p-4 justify-self-center text-custom-orange font-[poppins] font-extrabold text-8xl">
        404
      </div>
      <div className=" justify-self-center">
        Sorry, the page you're looking for doesn't exist.
      </div>
      <div className="justify-self-center">
        Go back to the{" "}
        <span className="underline">
          <Link href="/">home page</Link>
        </span>
        .
      </div>
    </div>
  );
}
