import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <section className=" h-full text-black flex flex-col items-center justify-center overflow-y-auto flex-wrap">
            <div className="w-9/12 flex gap-2 items-center justify-center">
                <div className="justify-items-center ">
                    <Image
                        src="../../images/logo.svg"
                        alt="Ember AI logo"
                        width={468}
                        height={150}
                        sizes="(max-width: 639px) 297px, (min-width: 640px) 468px"
                        className="pb-16"
                    />
                    <p className=" mb-2 w-[260px] text-center font-[Open_Sans] text-[20px] not-italic font-semibold leading-[24px] sm:text-[35px] sm:w-[600px] h-auto md:w-[995px] sm:leading-[38px] sm:mb-12">
                        Meet your new prompt creation partner!
                    </p>
                    <div className='text-center font-["Open_Sans"] text-[18px]  not-italic font-normal leading-[24px] sm:text-[33px] sm:leading-9 sm:w-[600px] md:max-4xl lg:w-auto lg:mb-12'>
                        See how the Pentagram Framework can take your prompt from Ember to flame.
                    </div>
                    <Link href="/promptInput">
                        <button className="cursor-pointer mt-[31px] w-[174px] h-[38px] bg-[#61529D] rounded-4xl text-[white] text-[16px] font-[Helvetica_Neue] sm:w-[287px] sm:h-[64px]">
                            Try It Out
                        </button>
                    </Link>
                </div>
            </div>
            <Link
                href="https://medium.com/knowledge-keeper/the-pentagram-framework-for-prompt-engineering-9c6c891e800b"
                className='text-[#61529D] text-center font-["Helvetica_Neue"] text-[16px] not-italic font-normal leading-[normal] mt-9  sm:text-[28px]'
            >
                Learn More about the Pentagram Framework
            </Link>
        </section>
    );
}
