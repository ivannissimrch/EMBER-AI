import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-custom-background text-[#61529D] flex items-center px-6 pt-3 pb-10 w-full">
            <div className="logo absolute left-4 top-3">
                <Link href={'/'}>
                    <img src="../../../images/logo.svg" alt="Ember AI logo" />
                </Link>
            </div>
            <div className="absolute inset-x-0 top-8 transform -translate-y-1/2 text-center">
                <Link href={'/about'} >About Us</Link>
                <Link href={'https://github.com/chingu-voyages/V54-tier2-team-23'} className="px-10">Contribute</Link>
            </div>
            <div className="logo" />
                
            {/* </div> */}
            {/* <div></div> */}
        </header>
    );
}
