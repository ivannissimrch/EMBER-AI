import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-white text-black [grid-area:1_/_1_/_2_/_13] flex items-center px-6 py-3 justify-between">
			<div className="logo">
				<Link href={"/"}>
					<h1 className="font-[Poppins] text-[22px] not-italic font-semibold leading-[normal] ">
						Logo
					</h1>
				</Link>
			</div>
		</header>
	);
}
