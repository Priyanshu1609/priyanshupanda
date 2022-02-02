import { useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"


const NavItem = ({ active, name, route, setActive }) => {
    return (
        active !== name ? (
            <Link href={route}>
                <a>
                    <span className="space-x-5 hover:text-green-400" onClick={() => setActive(name)}>{name}</span>
                </a>
            </Link>
        ) : null
    )
}

const Navbar = () => {
    const [active, setActive] = useState('')
    const { pathname } = useRouter();

    useEffect(() => {
        if (pathname === '/') setActive('About')
        if (pathname === '/resume') setActive('Resume')
        if (pathname === '/projects') setActive('Projects')
    }, [pathname])
    return (
        <div className="flex justify-between px-5 py-3 my-3 mr-4">
            <span className="text-xl font-bold border-b-4 border-green text-green md:text-2xl ">{active}</span>
            <div className="flex space-x-3 text-red-400 font-lg">
                <NavItem active={active} name="About" route="/" setActive={setActive} />
                <NavItem active={active} name="Resume" route="/resume" setActive={setActive} />
                <NavItem active={active} name="Projects" route="/projects" setActive={setActive} />
            </div>
        </div>
    )
}

export default Navbar
