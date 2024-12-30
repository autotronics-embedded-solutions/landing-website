export default function BenefitsSection () {
    return (<>
        <div className="w-full h-screen bg-gradient-to-b from-purple-500 to-purple-300 text-gray-800 flex lg:flex-row flex-col items-center justify-center gap-20 relative">

            <div className="w-[500px] h-[200px]">
                <h1 className="font-medium text-3xl text-pretty">What benefits do our talent bring you?</h1>
                <p className="text-xl mt-12">
                    We personally select our talent and provide them with top-notch internal training. As a result, they provide you with the best possible quality and effectiveness.
                </p>
            </div>

            <div className=" w-[400px] h-[200px] flex items-center justify-center">
                <img src="./happiness.png" className="h-[90%] sm:ml-20"/>
            </div>

            <div className="absolute -bottom-5 left-0 w-full h-16 bg-gradient-to-b from-purple-300 to-purple-200"/>
        </div>
    </>)
}