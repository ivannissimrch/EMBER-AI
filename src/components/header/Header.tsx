import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white text-black [grid-area:1_/_1_/_2_/_13] flex items-center ">
      <Link href={"/"}>
        <h1 className="text-[#E26310] font-[Poppins] text-[22px] not-italic font-semibold leading-[normal]  pl-[31px]">
          Logo
        </h1>
      </Link>
      <Link href={"AboutUs"}>
        <h2 className="text-[#61529D] font-[Helvetica_Neue] text-[20px] not-italic font-medium leading-[24px] ml-[89PX]">
          ABOUT US
        </h2>
      </Link>
    </header>
  );
}
