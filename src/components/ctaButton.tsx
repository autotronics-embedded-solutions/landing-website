import { Button } from "./ui/button";

export default function CTAButton({ className }: {className?: string}) {
    return (
        <>
                <Button
                    variant={"outline"}
                    className={`rounded-3xl py-7 px-10 hover:bg-white/10 ${className}`}
                >
                    <p className="text-xl tracking-wide">
                        Help me build an ROS Applications
                    </p>
                </Button>
        </>
    );
}