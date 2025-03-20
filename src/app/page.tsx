export default function Home() {
	return (
		<section className=" h-full text-black flex flex-col items-center justify-center overflow-y-auto">
			<div className="w-9/12 flex gap-2 items-center">
				<div className="w-1/2">
					<h1 className="text-[#000] text-[64px] not-italic font-extrabold leading-[normal] mb-6">
						EMBER AI
					</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
						nostrum blanditiis iste a nemo earum enim accusamus omnis explicabo
						nam? Voluptate beatae exercitationem tempora officia molestias
						expedita repellat non cupiditate.
					</p>
					<button className="mt-[31px] w-[245px] h-[60px] bg-gray-300 rounded-4xl">
						Start
					</button>
				</div>

				<div className="w-1/2 flex justify-center items-center">
					<h2>Logo</h2>
				</div>
			</div>
		</section>
	);
}
