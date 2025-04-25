import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <section className=" h-full text-black flex flex-col items-center justify-center overflow-y-auto flex-wrap">
            <div className="w-9/12 flex gap-2 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src="/images/logo.svg"
                        alt="Ember AI logo"
                        width={468}
                        height={78}
                        sizes="(max-width: 639px) 297px, (min-width: 640px) 468px"
                        className="mb-16 sm:mb-[86px]"
                    />
                    <p className=" mb-4 w-[260px] text-center font-[Open_Sans] text-[20px] not-italic font-semibold leading-[24px] sm:text-[35px] sm:w-[600px] h-auto md:w-[995px] sm:leading-[38px] sm:mb-12">
                        Meet your new prompt creation partner!
                    </p>
                    <div className='mb-16 text-center font-["Open_Sans"] text-[18px]  not-italic font-normal leading-[24px]  sm:text-[33px] sm:leading-9 sm:w-[600px]  md:max-4xl lg:w-auto lg:mb-24'>
                        See how the Pentagram Framework can take your prompt from Ember to flame.
                    </div>
                    <Link href="/promptInput">
                        <button className="mb-4 cursor-pointer  w-[174px] h-[38px] bg-[#61529D] rounded-4xl text-[white] text-xl sm:text-3xl sm:w-[287px] sm:h-[64px] sm:mb-9">
                            Try It Out
                        </button>
                    </Link>
                </div>
            </div>
            <Link
                href="https://medium.com/knowledge-keeper/the-pentagram-framework-for-prompt-engineering-9c6c891e800b"
                className='text-[#61529D] text-center text-[16px] not-italic font-normal leading-[normal]   sm:text-[28px]'
            >
                Learn More about the Pentagram Framework
            </Link>
        </section>
    );
}
