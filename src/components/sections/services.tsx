export default function ServicesSection () {
    return (<>
        <div className="w-full h-screen bg-gradient-to-b from-purple-200 to-purple-50 flex lg:flex-row flex-col items-center justify-center gap-20 relative">
            <div className=" w-[400px] h-[200px] flex items-center justify-center">
                <img src="./benefit.png" className="h-[90%] mr-32 mb-10"/>
            </div>

            <div className="w-[500px] h-[200px]">
                <h1 className="font-medium text-3xl text-pretty">What other services do we provide?</h1>
                <p className="text-xl mt-12">
                    Along with the best talent in the market tailored to your specific needs, we also develop comprehensive software solutions for future automotive technologies. 
                </p>
            </div>

            <div className="absolute -bottom-5 left-0 w-full h-16 bg-gradient-to-b from-purple-50 to-white"/>
        </div>
    </>)
}