'use client';

import { H4, P } from "@/components";
import Image from "next/image";
import { Home, Briefcase, User, PenTool, Mail, Menu } from "react-feather";
import cn from "@/util/cn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Moon } from "react-feather";

const navItems = [
    {
        name: 'Homepage',
        href: '/',
        icon: Home
    },
    {
        name: 'Projects',
        href: '/projects',
        icon: Briefcase
    },
    {
        name: 'About',
        href: '/about',
        icon: User
    },
    {
        name: 'Blog',
        href: '/blog',
        icon: PenTool
    },
    {
        name: 'Contact',
        href: '/contact',
        icon: Mail
    }
    
]

const links = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/brandondkong/',
        icon: faLinkedin
    },

    {
        name: 'Github',
        href: 'https://www.github.com/brandon-kong/',
        icon: faGithub
    }
]

export default function Navbar() {
    const pathname = usePathname();

  return (
    <aside className="z-[100] bg-background flex sidebar-shown:hidden flex-row justify-center fixed py-3 px-6 icon-only:px-6 w-full h-navbar">
        <div
        className={'flex flex-row items-center justify-between w-full'}
        >
            <div
            className={'flex items-center justify-center gap-4'}
            >
                <div
                className={'flex items-center justify-center'}
                >
                    <Image
                    src="/images/profile-picture.jpg"
                    width={2000}
                    height={2000}
                    alt="logo"
                    priority
                    className="w-12 h-12 icon-only:h-14 icon-only:w-14 rounded-full aspect-square"
                    />
                </div>

                <div
                className={'flex-col items-start justify-center flex h-full'}
                >
                    <H4 className="text-md font-medium">Brandon Kong</H4>
                    <H4 className="mt-0.5 text-sm tracking-[0] font-medium text-background-secondary-400">
                        Full-stack Developer
                    </H4>
                </div>
            </div>

        </div>
        
        <div
        className={'h-full items-center justify-center flex'}
        >
            <div
            className={'group flex items-center justify-center rounded-xl w-10 h-10 p-1 bg-transparent transition-colors duration-300 hover:bg-background-secondary-900'}
            >
                <Menu className="cursor-pointer w-6 h-6 stroke-background-secondary-400 group-hover:stroke-background-secondary-100 transition-colors duration-300" />
            </div>
        </div>
        
      
    </aside>
  )
}
    