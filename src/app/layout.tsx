import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Autotronics",
    description: "Autonomous Software Solutions",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} h-screen w-screen overflow-x-hidden selection:bg-violet-300/50`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
