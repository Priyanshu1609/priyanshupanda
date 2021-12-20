import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'
import Image from "next/image";


const Sidebar = () => {

    const { theme, setTheme } = useTheme();

    return (
        <div className="flex flex-col flex-grow my-16 ">

            <div>
   
                <img src="https://i.ibb.co/b6YnY1d/me.jpg" alt="me" width="128" height="128" className="mx-auto rounded-full " />
                <h3 className="my-4 text-3xl font-medium tracking-wider font-Kaushan">
                    <span className="text-green">Priyanshu</span>  Kumar Panda
                </h3>
                <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Developer</p>
                <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200" href="..." download='name '><GiTie className="w-6 h-6" />Download Resume</a>
            </div>
            {/* <div>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">HOME</p>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">ABOUT</p>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">PROJECTS</p>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">RESUME</p>
            </div> */}

            <div className="flex justify-around w-9/12 mx-auto my-5 text-red-500 md:w-full">
                <a href="...">
                    <AiFillYoutube className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="...">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="...">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
            </div>

            <div>
                <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
                    onClick={() => window.open('mailto:priyanshupanda.ctp@gmail.com')}
                >Email Me</button>
                <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
                    onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
                >Toggle theme</button>
            </div>
        </div>
    )
}
//ida

export default Sidebar
