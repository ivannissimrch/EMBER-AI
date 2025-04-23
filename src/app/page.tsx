import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <section className=" h-full text-black flex flex-col items-center justify-center overflow-y-auto">
            <div className="w-9/12 flex gap-2 items-center justify-center">
                <div className="justify-items-center ">
                    <Image
                        src="../../images/logo.svg"
                        alt="Ember AI logo"
                        width={297}
                        height={77}
                        // className="h-[150px] pb-[60px]"
                        className="pb-[60px]"
                    />
                    <div className=" mb-2 w-[260px] text-center  font-[Open_Sans] text-[20px] not-italic font-semibold leading-[24px]">
                        Meet your new prompt creation partner!
                    </div>
                    <div className='text-center font-["Open_Sans"] text-[18px] not-italic font-normal leading-[24px]'>
                        See how the Pentagram Framework can take your prompt from Ember to flame.
                    </div>
                    <Link href="/promptInput">
                        <button className="cursor-pointer mt-[31px] w-[174px] h-[38px] bg-[#61529D] rounded-4xl text-[white] text-[16px] font-[Helvetica_Neue]">
                            Try It Out
                        </button>
                    </Link>
                </div>

                {/* <div className="w-1/2 flex justify-center items-center">
					<h2 className="font-[Poppins] text-4xl">logo</h2>å
				</div> */}
            </div>
        </section>
    );
}
