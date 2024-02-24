'use client';

import { useState } from "react";
import { H4, P } from "@/components";
import Image from "next/image";
import { Home, Briefcase, User, PenTool, Mail, Menu } from "react-feather";
import cn from "@/util/cn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Moon } from "react-feather";

import { motion } from "framer-motion";

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
        href: '/',
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

    const [open, setOpen] = useState(false);

  return (
    <div
    className={'flex-col flex sidebar-shown:hidden'}
    >
        <aside className="z-[100] bg-background flex flex-row justify-center fixed py-3 px-6 icon-only:px-6 w-full h-navbar">
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
                <button
                onClick={() => setOpen(!open)}
                className={'group cursor-pointer flex items-center justify-center rounded-xl w-10 h-10 p-1 bg-transparent transition-colors duration-300 hover:bg-background-secondary-900'}
                >
                    <Menu className="w-6 h-6 stroke-background-secondary-400 group-hover:stroke-background-secondary-100 transition-colors duration-300" />
                </button>
            </div>
            
        
        </aside>

        {
            (
                <motion.div
                initial={{ opacity: 0, visibility: 'hidden'}}
                animate={ { opacity: open ? 1 : 0, visibility: open ? 'visible' : 'hidden' } }
                exit={{ opacity: 0, visibility: 'hidden' }}
                transition={{ opacity: { duration: 0.2 }, 
                visibility: { delay: open ? 0 : 0.2 }
            } }

                className={'fixed top-0 left-0 w-full h-full bg-background-secondary-950/50 z-[99]'}
                onClick={() => setOpen(false)}
                >
                     <div
                    className={'flex-col items-center justify-center flex bg-background py-10 px-6 pt-navbar pointer-events-auto gap-6'}
                    >
                         <nav
                        className={'h-auto w-full flex-1'}
                        >
                            <ul className="space-y-1 mt-8 flex flex-col items-center h-full">
                                {navItems.map((item, index) => {
                                    const firstPath = "/" + pathname.split('/')[1]
                                    const isSelected = pathname === item.href || firstPath === item.href;
                                    return (
                                    <li key={index} 
                                    data-selected={isSelected}
                                    className="w-full group h-[40px] hover:bg-background-secondary-900/40 rounded-xl px-3 transition-colors duration-300 cursor-pointer data-[selected=true]:bg-background-secondary-900"
                                    >
                                        <Link
                                        href={item.href}
                                        className="h-full w-full flex items-center justify-start gap-3"
                                        >
                                            <item.icon className={cn("w-5 h-5 stroke-background-secondary-400", isSelected && "stroke-background-secondary-50")} />
                                            
                                            <span
                                            className={cn('font-semibold text-background-secondary-400 text-sm inline-block', isSelected && 'text-background-secondary-50')}
                                            >
                                                {item.name}
                                            </span>
                                            
                                            
                                        </Link>
                                    </li>
                                    )
                                })}
                            </ul>
                        </nav>

                        <hr className="mx-auto w-full border-t-2 border-background-secondary-900/50 block" />

                        <div
                        className={'flex flex-row-reverse items-center justify-center gap-10'}
                        >
                            {
                                links.map((link, index) => {
                                    return (
                                    <Link
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    aria-label="Social Media Link"
                                    rel="noreferrer"
                                    className="group w-8 h-8 rounded-full aspect-square p-1 bg-transparent transition-colors duration-300 hover:bg-background-secondary-900"
                                    >
                                        <FontAwesomeIcon
                                        icon={link.icon}
                                        className="w-6 h-6 text-background-secondary-500 group-hover:text-background-secondary-50 duration-300 aspect-square"
                                        />
                                    </Link>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </motion.div>
            )
        }
    </div>
  )
}
    