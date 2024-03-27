'use client';

import React from "react";

import { H1, H2, P, SlideIn } from "@/components";

import Image from "next/image";
import GridCard from "@/components/grid-card";
import BackgroundCard, { BackgroundCardProps } from "@/components/background-card";

const programmingLanguages = [
    {
        "name": "Python",
        "className": "rounded-t-xl sidebar-shown:rounded-tr-none"
    },
    {
        "name": "Java",
        "className": "sidebar-shown:rounded-tr-xl"
    },
    {
        "name": "JavaScript/TypeScript",
    },
    {
        "name": "C#",
    },
    {
        "name": "C/C++",
        "className": "sidebar-shown:rounded-bl-xl"
    },
    {
        "name": "GoLang",
        "className": "rounded-b-xl sidebar-shown:rounded-bl-none"
    }
]

const databases = [
    {
        "name": "MongoDB",
        "className": "rounded-t-xl sidebar-shown:rounded-tr-none"
    },
    {
        "name": "PostgreSQL",
        "className": "sidebar-shown:rounded-tr-xl"
    },
    {
        "name": "Redis",
    },
    {
        "name": "SQLite",
        "className": "sidebar-shown:rounded-br-xl"
    },
    {
        "name": "Firebase",
        "className": "rounded-b-xl"
    }
];

const frameworks = [
    {
        "name": "React/Next.js",
        "className": "rounded-t-xl sidebar-shown:rounded-tr-none"
    },
    {
        "name": "Vue.js",
        "className": "sidebar-shown:rounded-tr-xl"
    },
    {
        "name": "Django",
    },
    {
        "name": "Flask",
    },
    {
        "name": "FastAPI",
    },
    {
        "name": "Node.js",
    },
    {
        "name": "Express",
        "className": "sidebar-shown:rounded-bl-xl"
    },
    {
        "name": "ASP.NET Core",
        "className": "sidebar-shown:rounded-br-xl"
    },
];

const tools = [
    {
        "name": "TailwindCSS",
        "className": "rounded-t-xl sidebar-shown:rounded-tr-none"
    },
    {
        "name": "AWS",
        "className": "sidebar-shown:rounded-tr-xl"
    },
    {
        "name": "JWT & OAuth",
    },

    {
        "name": "RESTful APIs",
        "className": "sidebar-shown:rounded-br-xl"
    },
    {
        "name": "Docker",
        "className": "rounded-b-xl"
    }

]

const experiences: BackgroundCardProps[] = [
    {
        "title": "Research Assistant",
        "subtitle": "Motorola Solutions Foundation",
        "description": "Performing research in Bioinformatics, in the context of Novel Discoveries of Brainstem Nuclei Localization and Function. I am currently using machine learning algorithms to cluster and classify brainstem nuclei in the Reticular Formation.",
        "dateRange": "Jan 2024 – Present"
    },
    {
        "title": "Lead Game Developer",
        "subtitle": "Independent Contractor",
        "description": "Developed several 2D and 3D immersive games using Unity, Unreal Engine, Love2D, Godot, etc... I was responsible for creating game mechanics, designing levels, and implementing game logic. I also worked on the game's UI/UX and implemented multiplayer functionality. My games have reached tens of millions of game plays and have been featured on popular gaming platforms.",
        "dateRange": "2018 – Present"
    },
    {
        "title": "Environmental Scientist",
        "subtitle": "NASA",
        "description": "Conducted research on the environment of Enceladus, a moon of Saturn, and its potential habitability for life. I was responsible for analyzing data from the Cassini spacecraft in order to determine the best scientific instruments to use for future missions to Enceladus. My team and I established a Preliminary Design Review (PDR) for an orbiter that would be sent to Enceladus to take high-resolution images and collect data on the moon's magnetic field, gravity, and atmosphere.",
        "dateRange": "Sept – December 2023"
    },
]

const education: BackgroundCardProps[] = [
    {
        "title": "Bachelor of Science in Computer Science",
        "subtitle": "DePaul University",
        "description": (
            <div>
                <p>GPA: 3.96/4.0</p>
                <p>Relevant coursework</p>
                <ul className={'list-disc ml-5'}>
                    <li>Data Structures and Algorithms</li>
                    <li>Design and Analysis of Algorithms</li>
                    <li>Computer Systems I/II</li>
                    <li>Discrete Mathematics I/II</li>
                    <li>Concepts of Programming Languages</li>
                    <li>Software Engineering</li>
                </ul>
            </div>
        ),
        "dateRange": "Sep 2022 – Present"
    },
    {
        "title": "High School Diploma",
        "subtitle": "Valencia High School",
        "description": "",
        "dateRange": "2022"
    },
]

export default function Projects() {
    return (
        <main className="w-full flex flex-col space-y-20 sidebar-shown:space-y-32">
            <div
            className={'w-full flex gap-10'}
            >
                <div
                className={'flex flex-col flex-1 gap-10'}
                >
                    <div>
                        <H1>Brandon Kong</H1>
                        <H1 className={'text-background-secondary-500 dark:text-background-secondary-300'}>Full-Stack Developer</H1>
                    </div>
                    
                    
                    <div>
                        <P
                        className={'text-background-secondary-300'}
                        >
                        I’m Brandon, a software engineer based in Chicago, IL. I specialize in building robust, user-friendly, and scalable applications and software. I have a strong passion for developing innovative solutions and solving complex problems. 
                        </P>

                        <P
                        className={'text-background-secondary-300 mt-5'}>
                            Research assistant at DePaul University, where I am currently pursuing a Bachelor of Science in Computer Science. I have spoken at IEEE conferences and have been actively involved in research projects. Currently, I am working on a project that will improve the public transportation system in Chicago.
                        </P>

                    </div>
                    
                </div>

                <div
                className={'hidden sidebar-shown:block'}
                >
                    <Image src={'/images/profile-picture.jpg'} width={2000} height={2000} alt={'profile-picture'} priority className={'w-[200px] h-[200px] rounded-full aspect-square'} />
                </div>
            </div>

            <SlideIn>
                <H2>Programming Languages</H2>

                <div
                className={'h-fit grid grid-cols-1 sidebar-shown:grid-cols-2 gap-1'}>
                    {programmingLanguages.map((prog, index) => {
                        return (
                            <GridCard
                            className={prog.className}
                            key={index}
                            >
                                { prog.name }
                            </GridCard>
                        )
                    })}
                </div>
            </SlideIn>

            <SlideIn>
                <H2>Databases</H2>

                <div
                className={'h-fit grid grid-cols-1 sidebar-shown:grid-cols-2 gap-1'}>
                    {databases.map((prog, index) => {
                        return (
                            <GridCard
                            className={prog.className}
                            key={index}
                            >
                                { prog.name }
                            </GridCard>
                        )
                    })}
                </div>
            </SlideIn>

            <SlideIn>
                <H2>Frameworks</H2>

                <div
                className={'h-fit grid grid-cols-1 sidebar-shown:grid-cols-2 gap-1'}>
                    {frameworks.map((prog, index) => {
                        return (
                            <GridCard
                            className={prog.className}
                            key={index}
                            >
                                { prog.name }
                            </GridCard>
                        )
                    })}
                </div>
            </SlideIn>

            <SlideIn>
                <H2>Tools</H2>

                <div
                className={'grid grid-cols-1 sidebar-shown:grid-cols-2 gap-1'}>
                    {tools.map((prog, index) => {
                        return (
                            <GridCard
                            className={prog.className}
                            key={index}
                            >
                                { prog.name }
                            </GridCard>
                        )
                    })}
                </div>
            </SlideIn>

            <SlideIn>
                <H2>Experiences</H2>

                <div
                className={'grid grid-cols-1 gap-10'}>
                    {experiences.map((prog, index) => {
                        return (
                            <React.Fragment
                            key={index}
                            >
                            <BackgroundCard
                            title={prog.title}
                            subtitle={prog.subtitle}
                            description={prog.description}
                            dateRange={prog.dateRange}

                            />

                            {
                                index !== experiences.length - 1 && (
                                    <div
                                    className={'w-full border-t-2 border-background-secondary-light-300/50 dark:border-background-secondary-900/50'}
                                    />
                                )
                            }
                            </React.Fragment>
                        )
                    })}
                </div>
            </SlideIn>

            <SlideIn>
                <H2>Education</H2>

                <div
                className={'grid grid-cols-1 gap-10'}>
                    {education.map((prog, index) => {
                        return (
                            <React.Fragment
                            key={index}
                            >
                            <BackgroundCard
                            title={prog.title}
                            subtitle={prog.subtitle}
                            description={prog.description}
                            dateRange={prog.dateRange}

                            />

                            {
                                index !== education.length - 1 && (
                                    <div
                                    className={'w-full border-t-2 border-background-secondary-light-300/50 dark:border-background-secondary-900/50'}
                                    />
                                )
                            }
                            </React.Fragment>
                        )
                    })}
                </div>
            </SlideIn>
        </main>
    );
}
