import Link from "next/link";
import { Button } from "./ui/button";

export default function CTAButton({ className }: {className?: string}) {
    return (
        <>
                <Button
                    variant={"outline"}
                    className={`rounded-3xl py-7 px-10 flex flex-row items-center justify-center hover:bg-white/10 active:bg-white/20 focus:outline-none focus:ring focus:ring-violet-300 ${className}`}
                    asChild
                >
                    <Link href={"/contact"}>                    
                        <p className="text-xl tracking-wide h-fit">
                            Help me find the <span className=" underline">best</span> solutions
                        </p>
                    </Link>
                </Button>
        </>
    );
}
