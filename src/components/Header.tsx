import React from "react";
import {FaGithub, FaDiscord, FaTelegram, FaReddit} from "react-icons/fa";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center py-5 px-10 lg:px-32">
            <Link href="/">
                <span className="text-2xl font-bold whitespace-nowrap">Mister Kirill</span>
            </Link>
            <div className="flex items-center gap-5 font-mono text-lg">
                <Link href="/" className="hover:bg-orange-400 px-2 py-1 rounded transition-colors">
                    home
                </Link>
                <Link href="/projects" className="hover:bg-blue-400 px-2 py-1 rounded transition-colors">
                    projects
                </Link>
                <Link href="/blog" className="hover:bg-red-400 px-2 py-1 rounded transition-colors">
                    blog
                </Link>
            </div>
            <div className="flex gap-3">
                <a target="_blank" href="https://t.me/misterkirill1"
                   className="hover:bg-[#2aabee] p-1 rounded-full transition-colors">
                    <FaTelegram size={40}/>
                </a>
                <a target="_blank" href="https://discordapp.com/users/1006899291824078858"
                   className="hover:bg-[#7289da] p-1 rounded-full transition-colors">
                    <FaDiscord size={40}/>
                </a>
                <a target="_blank" href="https://www.reddit.com/user/MisterKirill"
                   className="hover:bg-[#ff5700] p-1 rounded-full transition-colors">
                    <FaReddit size={40}/>
                </a>
                <a target="_blank" href="https://github.com/MisterKirill"
                   className="hover:bg-[#24292e] p-1 rounded-full transition-colors">
                    <FaGithub size={40}/>
                </a>
            </div>
        </header>
    )
}
