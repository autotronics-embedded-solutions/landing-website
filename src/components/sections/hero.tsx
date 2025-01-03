import CTAButton from "../ctaButton";
import { GlobeDemo } from "../globeDefined";
import { Button } from "../ui/button";

export default function HeroSection({}) {
    return (
        <>
            <div className="w-full h-screen flex flex-col items-center justify-around overflow-hidden text-white z-20 py-20 bg-black relative">
                <span className="flex flex-col items-center justify-center text-center mt-32">
                    <h1 className="text-2xl md:text-4xl sm:text-6xl">Transforming Automotives</h1>
                    <h2 className="text-lg md:text-xl sm:text-2xl">
                        through comprehensive software solutions & quality resources
                    </h2>
                </span>

                <div className="absolute top-0 bottom-0 left-0 right-0 pt-32 -z-10 hidden sm:block">
                    <GlobeDemo />
                </div>

                <CTAButton className=""/>

                <div className="absolute -bottom-10 left-0 w-full h-16 bg-gradient-to-b from-black to-purple-900"/>
            </div>
        </>
    );
}
