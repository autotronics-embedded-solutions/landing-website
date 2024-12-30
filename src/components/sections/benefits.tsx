export default function BenefitsSection () {
    return (<>
        <div className="w-full h-screen bg-gradient-to-b from-purple-500 to-purple-300 text-gray-800 flex lg:flex-row flex-col items-center justify-center gap-20 relative">

            <div className="w-[500px] h-[200px]">
                <h1 className="font-medium text-3xl text-pretty">What benefits do our talent bring you?</h1>
                <p className="text-xl mt-12">
                    Our talents are personally hand-picked paired with quality in-house training. Hence they bring you the utmost quality and efficient results.
                </p>
            </div>

            <div className=" w-[400px] h-[200px] flex items-center justify-center">
                <img src="./happiness.png" className="h-[90%] ml-20"/>
            </div>

            <div className="absolute -bottom-5 left-0 w-full h-16 bg-gradient-to-b from-purple-300 to-purple-200"/>
        </div>
    </>)
}