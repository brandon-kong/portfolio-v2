import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar";
import { P } from "@/components";
import { Analytics } from '@vercel/analytics/react';

import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/layout/navbar";

import { ThemeProvider } from "next-themes";

const inter = Inter({ 
    subsets: ["latin", "cyrillic-ext", "greek", "vietnamese"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: "Brandon Kong",
    description: "Brandon Kong's personal website",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://bdkong.com",
        siteName: "Brandon Kong",
        videos: [
            {
                url: "/previews/gradient.mp4",
                width: 1280,
                height: 720,
            },
        ],
        images: [
            {
                url: "/previews/gradient.jpg",
                width: 800,
                height: 600,
                alt: "Gradient",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                
                <ThemeProvider 
                attribute="class"
                enableSystem={false}
                defaultTheme="dark"
                >

                
                    <div className={'bg-background-light dark:bg-background text-black dark:text-white min-h-screen flex'}>
                    
                        <Sidebar />
                        <Navbar />
                        

                        <div
                        className={'w-full p-main-padding'}
                        >
                            <div className={'w-full bg-white dark:bg-background-secondary rounded-xl min-h-screen'}>
                                <div className={'max-w-content-width mx-auto w-full py-16 sidebar-shown:py-32 h-full flex flex-col items-center gap-32 px-6 sidebar-shown:px-0 lg-max:px-16 icon-only:px-0'}>
                                    {children}

                                    <div
                                    className={'w-full'}
                                    >
                                        <hr className={'w-full border-background-secondary-light-300/50 dark:border-background-secondary-900/50 mt-10 mb-10'} />
                                        <div className={'flex items-center justify-start gap-4'}>
                                            <P className={'text-background-secondary-400 text-sm'}>©2024 Brandon Kong</P>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </ThemeProvider>
                
                <Analytics />
                <SpeedInsights />
                
            </body>
        </html>
    );
}
