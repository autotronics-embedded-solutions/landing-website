import CTAButton from "../ctaButton";

export default function ClosingRemark () {
    return (<>
        <div className="w-full h-screen bg-white flex lg:flex-row flex-col items-center justify-center gap-32 sm:gap-20">
            {/* <div className=" w-[500px] h-[300px] bg-black">

            </div> */}

            <div className="w-[500px] h-[50px] flex flex-col justify-center items-center">
                <h1 className="font-medium text-3xl text-center text-pretty">What sets us apart from the rest?</h1>
                <p className="text-xl mt-12 text-center">
                    We constatly innovate for softwares and solutions to help you move ahead in the industry. Hence, we can drive your ideation to execution and deliver precisely analysed solutions and resources. 
                </p>
            </div>

            <CTAButton/>
        </div>
    </>)
}