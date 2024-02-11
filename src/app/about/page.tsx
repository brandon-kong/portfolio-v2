'use client';

import React from "react";

import { Button, ProjectCard, BlogCard, H1, H2, P, Tag, BlogCardProps } from "@/components";
import { Briefcase, MapPin } from "react-feather";

import { motion } from "framer-motion";
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

const tools = [
    {
        "name": "React/Next.js",
        "className": "rounded-t-xl sidebar-shown:rounded-tr-none"
    },
    {
        "name": "TailwindCSS",
        "className": "sidebar-shown:rounded-tr-xl"
    },
    {
        "name": "Node.js",
    },
    {
        "name": "Express",
    },
    {
        "name": "MongoDB",
    },
    {
        "name": "PostgreSQL",
    },
    {
        "name": "Redis",
    },
    {
        "name": "AWS"
    },
    {
        "name": "JWT & OAuth",
    },

    {
        "name": "ASP.NET Core",
    },

    {
        "name": "RESTful APIs",
        "className": "sidebar-shown:rounded-bl-xl"
    },
    {
        "name": "Docker",
        "className": "rounded-b-xl sidebar-shown:rounded-bl-none"
    }

]

const experiences: BackgroundCardProps[] = [
    {
        "title": "Software Engineer",
        "subtitle": "Google",
        "description": "Engaged in executing studies, trial runs with users, brainstorming, sketching blueprints, and crafting refined user experiences and user interfaces for iOS, Android, and the Web. Closely partnering with engineers, product supervisors, and important personnel. Designing experiences that are guided by data and centered on the user.",
        "dateRange": "March 2020 – Present"
    },
    {
        "title": "Software Engineer",
        "subtitle": "Facebook",
        "description": "Designing sleek, result-oriented, user-friendly interfaces for web and mobile platforms, guaranteeing superior outcomes, coordinating design projects among internal and external teams, guiding new members of the design team, aligning creative outputs with the objectives of clients, and intensely collaborating with developers and engineers.",
        "dateRange": "March 2019 – 2020"
    },
    {
        "title": "Software Engineer",
        "subtitle": "Amazon",
        "description": "Generating aesthetic frameworks, models for web and mobile apps, cooperating with the creative team, interested parties, product chiefs and coders in a flexible setting.",
        "dateRange": "March 2018 – 2019"
    },
]

const education: BackgroundCardProps[] = [
    {
        "title": "High School Diploma",
        "subtitle": "Valencia High School",
        "description": "",
        "dateRange": "2022"
    },
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
                        <H1 className={'text-background-secondary-300'}>Full-Stack Developer</H1>
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

            <motion.div
            initial={{ opacity: 0, y: 35 }}
            transition={{ duration: 1, delay: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}

            className={'flex flex-col gap-8 w-full'}
            >
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
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 35 }}
            transition={{ duration: 1, delay: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}

            className={'flex flex-col gap-8 w-full'}
            >
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
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 35 }}
            transition={{ duration: 1, delay: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}

            className={'flex flex-col gap-8 w-full'}
            >
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
                                    className={'w-full border-t-2 border-background-secondary-900/50'}
                                    />
                                )
                            }
                            </React.Fragment>
                        )
                    })}
                </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 35 }}
            transition={{ duration: 1, delay: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}

            className={'flex flex-col gap-8 w-full'}
            >
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
                                    className={'w-full border-t-2 border-background-secondary-900/50'}
                                    />
                                )
                            }
                            </React.Fragment>
                        )
                    })}
                </div>
            </motion.div>
        </main>
    );
}
