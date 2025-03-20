import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[hsla(212,_50%,_87%,_1)] text-black [grid-area:12_/_1_/_13_/_13] flex items-end pl-[31px] justify-evenly pb-[7px]">
      <Link
        className=" w-[10%]"
        href="https://github.com/chingu-voyages/V54-tier2-team-23"
      >
        <Image
          src="images/githubIcon.svg"
          alt="location icon"
          width={45}
          height={45}
        />
      </Link>
      <p className=" font-[Bitter] text-[26px] not-italic font-normal leading-[normal] w-[80%] flex justify-center">
        ©2025 Ember AI. All Rights Reserved
      </p>
      <div className=" w-[10%]"></div>
    </footer>
  );
}
