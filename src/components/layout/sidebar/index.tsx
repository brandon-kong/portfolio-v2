import { H4, P } from "@/components";
import Image from "next/image";
import { Home, Briefcase, User, PenTool, Mail } from "react-feather";
import cn from "@/util/cn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const navItems = [
    {
        name: 'Homepage',
        href: '#',
        icon: Home
    },
    {
        name: 'Projects',
        href: '#',
        icon: Briefcase
    },
    {
        name: 'About',
        href: '#',
        icon: User
    },
    {
        name: 'Blog',
        href: '#',
        icon: PenTool
    },
    {
        name: 'Contact',
        href: '#',
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
export default function Sidebar() {
  return (
    <aside className="hidden lg:block fixed py-10 px-6 w-sidebar">
        <div
        className={'flex flex-col items-center justify-center w-full'}
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
                className="w-14 h-14 rounded-full aspect-square"
                />
            </div>

            <div
            className={'flex-col items-center justify-center mt-5 hidden 2xl:flex'}
            >
                <H4 className="text-md font-medium">Brandon Kong</H4>
                <H4 className="mt-1 text-sm tracking-[0] font-normal text-background-secondary-400">
                    Full-stack Developer
                </H4>
            </div>
        </div>

        <div
        className={'mt-8 flex flex-col items-center justify-center'}
        >
            <div
            className={'flex flex-row-reverse items-center justify-center gap-4'}
            >
                {
                    links.map((link, index) => {
                        return (
                        <Link
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-full p-1 bg-transparent transition-colors duration-300 hover:bg-background-secondary-900"
                        >
                            <FontAwesomeIcon
                            icon={link.icon}
                            className="w-6 h-6 text-background-secondary-500 group-hover:text-background-secondary-50 duration-300"
                            />
                        </Link>
                        )
                    })
                }
                
            </div>
        </div>
        <nav>
            <ul className="space-y-1 mt-8">
                {navItems.map((item, index) => {
                    const isSelected = item.name === 'Homepage';
                    return (
                    <li key={index} 
                    data-selected={isSelected}
                    className="group h-[40px] w-full hover:bg-background-secondary-900/40 rounded-xl px-3 transition-colors duration-300 cursor-pointer data-[selected=true]:bg-background-secondary-900"
                    >
                        <Link
                        href={item.href}
                        className="h-full w-full flex items-center justify-start gap-3"
                        >
                            <item.icon className={cn("w-5 h-5 stroke-background-secondary-400", isSelected && "stroke-background-secondary-50")} />
                            
                            <span
                            className={cn('font-semibold text-background-secondary-400 text-sm', isSelected && 'text-background-secondary-50')}
                            >
                                {item.name}
                            </span>
                            
                            
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </nav>
    </aside>
  )
}
    