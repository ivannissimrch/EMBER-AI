export default function Home() {
  return (
    <section className=" h-full text-black flex flex-col items-center overflow-y-auto">
      <h1 className="text-[#000] text-[64px] not-italic font-extrabold leading-[normal] mt-[100px]">
        EMBER AI
      </h1>
      <p className="mt-[70px] text-[36px] ">Short description</p>
      <button className="mt-[31px] w-[245px] h-[60px] bg-gray-300 rounded-4xl">
        Start
      </button>
    </section>
  );
}
