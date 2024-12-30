export default function ProblemSolutionSection ({}) {
    return (<>
        <div className="w-full h-screen bg-gradient-to-b to-purple-600 from-purple-900 flex lg:flex-row flex-col items-center text-white/95 justify-center gap-20 relative">
            {/* <div className=" w-[500px] h-[300px] bg-gradient-to-b to-purple-700/60 from-purple-700/30 p-2 flex items-center justify-center shadow-lg shadow-purple-800/50 rounded-lg overflow-hidden"> */}
            {/* <div className=" w-[500px] h-[280px] overflow-hidden">
                <img className="w-full select-none align-middle mb-10" src="./__.jpeg"></img>
            </div> */}

            <div className=" w-[400px] h-[200px] flex items-center justify-center">
                <img src="./whitepeople.png" className="h-[100%] mr-20"/>
            </div>

            <div className="w-[500px] h-[200px]">
                <h1 className="font-medium text-3xl text-center sm:text-pretty sm:text-left">Looking for the best talent for your next project?</h1>
                <p className="text-xl mt-12 text-center sm:text-left">
                    Our team comprising of highly experienced industrial experts and skilled talent can help you find tailored solutions or support for your project.
                </p>
            </div>

            <div className="absolute -bottom-5 left-0 w-full h-16 bg-gradient-to-b from-purple-600 to-purple-500"/>
        </div>
    </>)
}