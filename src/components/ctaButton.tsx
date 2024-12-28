import { Button } from "./ui/button";

export default function CTAButton({ className }: {className?: string}) {
    return (
        <>
                <Button
                    variant={"outline"}
                    className={`rounded-3xl py-7 px-10 flex flex-row items-center justify-center hover:bg-white/10 ${className}`}
                >
                    <p className="text-xl tracking-wide h-fit">
                        Help me find the <span className=" underline">best</span> resources
                    </p>
                </Button>
        </>
    );
}
