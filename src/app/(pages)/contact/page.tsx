export const dynamic = "force-dynamic";

export default function Contact() {
    return (
        <main className="flex flex-col sm:flex-row min-h-full max-h-fit items-center justify-center bg-white gap-7">
            <div className="w-[450px] h-[300px] flex flex-col items-center justify-center gap-5">
                <h1 className="text-center font-medium text-2xl">For Business Queries, Contact Us At: </h1>
                <img className="h-[80px]" src="./contract.png"></img>
                <a className="text-blue-400 underline" href="mailto:sales@autotronics.co.in">sales@autotronics.co.in</a>
            </div>

            <div className="h-[200px] w-[1px] bg-gradient-to-b from-gray-950/50 via-gray-600/50 to-gray-950/50 hidden sm:block"/>

            <div className="w-[450px] h-[300px] flex flex-col items-center justify-center gap-5">
                <h1 className="text-center font-medium text-2xl">For Career Opportunities, &nbsp; Contact Us At: </h1>
                <img className="h-[80px]" src="./cooperation.png"></img>
                <a className="text-blue-400 underline" href="mailto:hr@autotronics.co.in">hr@autotronics.co.in</a>
            </div>
        </main>
    );
}