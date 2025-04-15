import Link from "next/link";

export default function Home() {
	return (
		<section className=" h-full text-black flex flex-col items-center justify-center overflow-y-auto">
			<div className="w-9/12 flex gap-2 items-center">
				<div className="justify-items-center">
					<img src="../../images/logo.svg" alt="Ember AI logo" className="h-[150px] pb-[60px]"/>
					<p>
					Ember AI is a prompt building assistant designed to help a user craft a well written, 
					complete prompt to use when utilizing an AI platform in seeking information.<br />
					It is based on the Pentagram method, or framework of crafting a prompt which is composed of five parts.<br />
					<strong>1. The Persona</strong> - a role that the LLM, or AI, should assume to give a point of reference for a response.<br />
					<strong>2. The Context</strong> - gives background information for the LLM so that the intent of the task is understood.<br />
					<strong>3. The Task</strong> - clearly define what the you are asking of the LLM. Include specific action verbs and instructions.<br />
					<strong>4. The Output</strong> - describe the desired format of the response.<br />
					<strong>5. Constraints</strong> - list any boundaries, restrictions or tone for the response.
					</p>
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
