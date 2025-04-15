'use client';

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { StoreProvider } from './helpers/StoreContext';

import './globals.css';
import '@/util/fontawsome';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-screen bg-custom-background">
            <body className="h-screen  flex flex-col">
                <Header />

                <StoreProvider>
                    <main className=" bg-custom-background flex-grow">{children}</main>
                </StoreProvider>

                <Footer />
            </body>
        </html>
    );
}
