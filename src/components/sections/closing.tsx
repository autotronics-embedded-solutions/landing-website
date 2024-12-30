import CTAButton from "../ctaButton";

export default function ClosingRemark () {
    return (<>
        <div className="w-full h-screen bg-white flex lg:flex-row flex-col items-center justify-center gap-32 sm:gap-20">
            {/* <div className=" w-[500px] h-[300px] bg-black">

            </div> */}

            <div className="w-[500px] h-[50px] flex flex-col justify-center items-center">
                <h1 className="font-medium text-3xl text-center text-pretty">What distinguishes us from others?</h1>
                <p className="text-xl mt-12 text-center">
                    We consistently develop software and solutions to help you advance in the market. As a result, we are able to translate your ideas into action and provide carefully considered resources and solutions.
                </p>
            </div>

            <CTAButton/>
        </div>
    </>)
}