import CTAButton from "@/components/ctaButton";
import Footer from "@/components/footer";
import BenefitsSection from "@/components/sections/benefits";
import HeroSection from "@/components/sections/hero";
import ProblemSolutionSection from "@/components/sections/problem_solution";
import ServicesSection from "@/components/sections/services";
import ClosingRemark from "@/components/sections/closing";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default function Home() {
    return (
        <main className="flex flex-col min-h-full max-h-fit items-center justify-between bg-black">
            <HeroSection />
            <ProblemSolutionSection />
            <BenefitsSection />
            <ServicesSection />
            <ClosingRemark />
            {/* <div className=" bg-white w-full flex items-center justify-center p-10">
                
            </div> */}

            {/* <Footer/> */}
        </main>
    );
}
