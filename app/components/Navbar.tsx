import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
    {name:"Home", href:"/"},
    {name:"Men", href: "/Men"},
    {name:"Women", href: "/Women"},
    {name:"Teens", href: "/Teens"},
];

export default function Navbar() {
    const pathname = usePathname()
    return (
        <header className="mb-8 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
              <Link href="/">
                <h1>
                    hello from us
                </h1>
              </Link>    

              <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                {links.map((link, idx)=>(
                    <div key={idx}></div>
                ))}
              </nav>
            </div>
        </header>
    )
}