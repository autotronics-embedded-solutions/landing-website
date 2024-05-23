import CTAButton from "../ctaButton";
import { GlobeDemo } from "../globeDefined";
import { Button } from "../ui/button";

export default function HeroSection({}) {
    return (
        <>
            <div className="w-full h-screen flex flex-col items-center justify-between overflow-hidden text-white z-20">
                <span className="flex flex-col items-center mt-32">
                    <h1 className="text-6xl">Transforming Automotives</h1>
                    <h2 className="text-2xl">
                        through comprehensive software solutions
                    </h2>
                </span>

                <div className="absolute top-0 bottom-0 left-0 right-0 pt-36 -z-10">
                    {/* <GlobeDemo /> */}
                </div>

                <CTAButton className="mb-60"/>
            </div>
        </>
    );
}
