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
        "className": "rounded-tl-xl"
    },
    {
        "name": "Java",
        "className": "rounded-tr-xl"
    },
    {
        "name": "JavaScript",
    },
    {
        "name": "TypeScript",
    },
    {
        "name": "C/C++",
        "className": "rounded-bl-xl"
    },
    {
        "name": "GoLang",
        "className": "rounded-br-xl"
    }
]

const tools = [
    {
        "name": "React",
        "className": "rounded-tl-xl"
    },
    {
        "name": "Next.js",
        "className": "rounded-tr-xl"
    },
    {
        "name": "TailwindCSS",
    },
    {
        "name": "Node.js",
    },
    {
        "name": "Express",
        "className": "rounded-bl-xl"
    },
    {
        "name": "Docker",
        "className": "rounded-br-xl"
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
        <main className="w-full flex flex-col space-y-32">
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
                        I’m Brandon, a product designer and design system specialist from Poland with over 9 years of experience focusing on user experience and design systems to creating a user-centered design in SaaS products.
                        </P>

                        <P
                        className={'text-background-secondary-300 mt-5'}>
                            Co-creator at Tetrisly one of the most popular starter kits for design systems. I had the opportunity to work with Phenom.com, Bidroom.com or Perfops.net but also with many startups from around the world as a Lead Designer.
                        </P>

                    </div>
                    
                </div>

                <div>
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
                className={'grid grid-cols-2 gap-1'}>
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
                className={'grid grid-cols-2 gap-1'}>
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
