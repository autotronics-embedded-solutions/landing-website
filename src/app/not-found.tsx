export default function NotFound() {
    return (
        <>
            <div className="w-full h-full gap-10 flex items-center justify-center bg-black">
                <div className="w-24 h-24">
                    <img src="./404.png" />
                </div>

                <div className="h-20 w-[0.1px] border border-white/40">

                </div>

                <div className="text-white">
                    Uh oh! Page Not Found!
                </div>
            </div>

            <div className="absolute bottom-0 w-full flex justify-end text-white">
                <a href="https://www.flaticon.com/free-icon/car_3242238?term=broken+car&related_id=3242238" className="underline">Car Crash Icon</a>&nbsp;by&nbsp;<a className="underline" href="https://www.flaticon.com/authors/surang/fill?author_id=275&type=standard">Surang</a>
            </div>
        </>
    );
}
