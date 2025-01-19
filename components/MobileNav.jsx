"use client"

import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { CiMenuFries } from 'react-icons/ci'
import Link from "next/link"

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
]


const MobileNav = () => {

    const pathname = usePathname();

    return (
        <nav>
            <Sheet>
                <SheetTrigger className="flex justify-center items-center">
                    <CiMenuFries className="text-[32px] text-accent" />
                </SheetTrigger>
                <SheetContent className="flex flex-col">
                    <div className="text-accent mt-32 mb-40 text-center text-2xl">
                        <Link href="/">
                            <h1 className="text-4xl font-semibold">RunCMDCreate<span className="text-white">.</span></h1>
                        </Link>
                    </div>
                    <nav className="flex flex-col justify-center items-center gap-8">
                        {links.map((link, index) => {
                            return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize transition-all duration-600 hover:opacity-70 hover:underline hover:decoration-2 hover:underline-offset-8 hover:decoration-accent`}>
                                {link.name}
                            </Link>
                        })}
                    </nav>
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav
