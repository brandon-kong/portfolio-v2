import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar";
import Link from "next/link";
import { P } from "@/components";

import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ 
    subsets: ["latin", "cyrillic-ext", "greek", "vietnamese"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: "Brandon Kong",
    description: "Brandon Kong's personal website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                
                <div className={'bg-background text-white min-h-screen flex'}>
                    <Sidebar />

                    <div
                    className={'w-full p-main-padding'}
                    >
                        <div className={'w-full bg-background-secondary rounded-xl min-h-screen'}>
                            <div className={'max-w-content-width mx-auto w-full py-16 sidebar-shown:py-32 h-full flex flex-col items-center gap-32 px-6 sidebar-shown:px-0 lg-max:px-16 icon-only:px-0'}>
                                {children}

                                <div
                                className={'w-full'}
                                >
                                    <hr className={'w-full border-background-secondary-900/50 mt-10 mb-10'} />
                                    <div className={'flex items-center justify-start gap-4'}>
                                        <P className={'text-background-secondary-400 text-sm'}>©2024 Brandon Kong</P>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SpeedInsights />
            </body>
        </html>
    );
}
