import type { Metadata } from "next";
import { Montserrat, Tourney } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Autotronics",
    description: "Autonomous Software Solutions",
};

const tourneyFont = Tourney({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-tourney',
    });

      export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} ${tourneyFont.variable} h-screen w-screen overflow-x-hidden selection:bg-violet-300/50`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
