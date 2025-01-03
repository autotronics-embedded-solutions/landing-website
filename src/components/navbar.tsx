export type MenuLinks = {
    name: string;
    link: string;
    className?: string;
};

export default function Navbar() {
    const links: MenuLinks[] = [
        {
            name: "Home",
            link: "/",
        },
        // {
        //     name: "About",
        //     link: "/about",
        // },
        // {
        //     name: "Services",
        //     link: "/services",
        // },
        // {
        //     name: "Blog",
        //     link: "/blog",
        // },
        {
            name: "Contact",
            link: "/contact",
            className: " p-4 border rounded-xl hover:bg-violet-200/30",
        },
    ];

    return (
        <>
            <div className="w-full h-20 px-10 flex justify-between items-center bg-black/80 fixed bg-opacity-50 backdrop-blur top-0 z-50">
                {/* <div className="w-16 h-16 m-2 bg-white flex items-center rounded-xl">
                    <img src="./autotronicslogo.svg" />
                </div> */}

                <div className="flex items-center h-full rounded-xl text-white font-tourney">
                    Autotronics
                </div>

                <ul className="h-20 w-fit flex gap-5 items-center">
                    {links.map((link) => (
                        <li key={"link_navbar_"+link.name} className="text-white">
                            <a href={link.link} className={`hover:text-violet-300 ${link.className}`}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
