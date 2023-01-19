import Link from "next/link";
import { motion } from "framer-motion"
import { FiGithub, FiTwitter } from "react-icons/fi";
import { RiLinkedinLine, RiFacebookLine } from "react-icons/ri";

export default function Layout({ children }){
    return(
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 dark:text-white">
          <motion.header
          initial={{ y: -100}}
          animate={{ y: 0}}
          transition={{ duration: 0.7 }}
        className="bg-gray-900 mb-8 py-4 text-white">
            <div className="container mx-auto flex justify-center items-center">
                <Link href="/">
                    HOME
                </Link>
                <span className="mx-auto text-3xl"> welcome to my blog </span>
            </div>
        </motion.header>
        <main className="container mx-auto flex-1">
            {children}
        </main>
        <motion.footer
        initial={{ y: 100}}
        animate={{ y: 0}}
        transition={{ duration: 0.7 }}
         className="bg-gray-900 mt-8 py-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    &copy; 2023 Ali Fertah
                </div>
                <div className="flex">
        <a href='https://github.com/alifertah' className="transition ease-in-out delay-150 hover:-translate-y-1 hover:text-sky-700 rounded text-white text-xl py-2 px-4"><FiGithub /></a>
        <a href='https://twitter.com/alifertah42/' className="transition ease-in-out delay-150 hover:-translate-y-1 hover:text-sky-700 rounded text-white text-xl py-2 px-4"><FiTwitter /></a>
        <a href='#' className="transition ease-in-out delay-150 hover:-translate-y-1 hover:text-sky-700 rounded text-white text-xl py-2 px-4"><RiLinkedinLine /></a>
        <a href='https://facebook.com/alifertah/' className="transition ease-in-out delay-150 hover:-translate-y-1 hover:text-sky-700 rounded text-white text-xl py-2 px-4"><RiFacebookLine /></a>
        
        </div>
            </div>
        </motion.footer>
        </div>
    )
}