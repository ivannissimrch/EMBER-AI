import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-custom-background text-black flex items-center px-6 py-3 justify-between">
            <div className="logo">
                <Link href={'/'}>
                    <h1 className="font-[Poppins] text-[22px] not-italic font-semibold leading-[normal] ">
                        logo
                    </h1>
                </Link>
            </div>
            <div className="flex gap-2">
                <Link href={'/about'}>About Us</Link>
                <Link href={'https://github.com/chingu-voyages/V54-tier2-team-23'}>Contribute</Link>
            </div>
            {/* <div></div> */}
        </header>
    );
}
