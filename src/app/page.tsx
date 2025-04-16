import Link from "next/link";

export default function Home() {
	return (
		<section className=" h-full text-black flex flex-col items-center justify-center overflow-y-auto">
			<div className="w-9/12 flex gap-2 items-center justify-center">
				<div className="justify-items-center ">
					<img src="../../images/logo.svg" alt="Ember AI logo" className="h-[150px] pb-[60px]"/>
					<div className="font-bold text-lg mb-2">
						Meet your new prompt creation partner!
					</div>
					<div>See how the Pentagram Framework can take your prompt from Ember to flame.</div>
					<Link
						href="/promptInput">
						<button className="cursor-pointer mt-[31px] w-[245px] h-[60px] bg-[#61529D] rounded-4xl text-[white] text-[24px]">
							Try It Out
						</button>
					</Link>
					
				</div>

				{/* <div className="w-1/2 flex justify-center items-center">
					<h2 className="font-[Poppins] text-4xl">logo</h2>
				</div> */}
			</div>
		</section>
	);
}
