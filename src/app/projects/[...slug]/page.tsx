'use client';

import React from "react";

import { Button, ProjectCard, BlogCard, H1, H2, P, Tag, BlogCardProps, TitledListItem } from "@/components";
import { Briefcase, ChevronLeft, MapPin } from "react-feather";

import { motion } from "framer-motion";
import Image from "next/image";
import GridCard from "@/components/grid-card";
import BackgroundCard, { BackgroundCardProps } from "@/components/background-card";
import Link from "next/link";
import ProjectBackgroundCard from "@/components/project-background-card";
import TestimonialCard from "@/components/testimonial";

const tools = [
    {
        "name": "React",
        "className": "rounded-t-xl"
    },
    {
        "name": "Next.js",
    },
    {
        "name": "TailwindCSS",
    },
    {
        "name": "Docker",
    },
    {
        "name": "Django",
    },
    {
        "name": "PostgreSQL",
        "className": "rounded-b-xl"

    },


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

export default function Project() {
    return (
        <main className="w-full flex flex-col gap-20 sidebar-shown:space-y-3 -mt-10 sidebar-shown:-mt-20">
            
            <div
            className={'w-full border-b-2 border-background-secondary-900/50 flex items-center gap-2 pb-5'}
            >
                <Link href={'/projects'} className={'group flex items-center gap-2'}>
                    <ChevronLeft width={15} height={15} className={'transition-colors duration-300 stroke-background-secondary-400 group-hover:stroke-background-secondary-100'} />
                    <P className={'text-sm font-medium'}>Back to list</P>
                </Link>
            </div>
            
            
            <div
            className={'w-full flex flex-col gap-10'}
            >
                <div
                className={'flex gap-2 flex-wrap'}
                >
                    <Tag
                    >
                        #fullstack
                    </Tag>

                    <Tag
                    >
                        #web
                    </Tag>

                    <Tag
                    >
                        #api
                    </Tag>
                </div>

                <div
                className={'flex flex-col flex-1 gap-10'}
                >
                    <div className={'space-y-2'}>
                        <H1>Sword API</H1>
                        <P
                        className={'text-background-secondary-300'}
                        >
                        Battle test your API with Sword API. A powerful, easy-to-use, and flexible API testing tool that allows you to test your API endpoints with ease.
                        </P>
                    </div>
                    
            

                    <Button
                    href={'#'}
                    variant={'background'}
                    className={'w-fit'}
                    >
                        Live Preview
                    </Button>
                </div>
            </div>

            <motion.div
            initial={{ opacity: 0, y: 35 }}
            transition={{ duration: 1, delay: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}

            className={'flex flex-col gap-8 w-full'}
            >
                <div
                className={'relative rounded-xl overflow-hidden w-full aspect-[1.3/1]'}
                >
                    <Image src={'/markups/project1.jpg'} alt={'Project Image'} width={1920} height={2000} 
                    className={'object-cover absolute top-0 left-0 w-full h-full rounded-xl'}
                    />
                </div>
            </motion.div>
            

            <motion.div
            initial={{ opacity: 0, y: 35 }}
            transition={{ duration: 1, delay: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}

            className={'flex flex-col gap-8 w-full'}
            >

                <ProjectBackgroundCard
                title={'Background'}
                >
                    <P>
                    Sword API was created to help developers test their API endpoints with ease. It is a powerful, easy-to-use, and flexible API testing tool that allows you to test your API endpoints with ease.
                    </P>
                </ProjectBackgroundCard>
                
            </motion.div>
            
            <motion.div
            initial={{ opacity: 0, y: 35 }}
            transition={{ duration: 1, delay: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}

            className={'flex flex-col gap-8 w-full'}
            >
                <hr className={'w-full border-t-2 border-background-secondary-900/50'} />
            </motion.div>
            

            <motion.div
            initial={{ opacity: 0, y: 35 }}
            transition={{ duration: 1, delay: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}

            className={'flex flex-col gap-8 w-full'}
            >
                <ProjectBackgroundCard
                title={'Goals'}
                >
                    <ul className={'list-disc space-y-12'}>
                        <TitledListItem 
                        number={1}
                        title={'Bringing a new dimension to user experiences and interfaces.'}
                        description={'In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.'}
                        />

                        <TitledListItem 
                        number={2}
                        title={'Bringing a new dimension to user experiences and interfaces.'}
                        description={'The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges'}
                        />

                        <TitledListItem 
                        number={3}
                        title={'Bringing a new dimension to user experiences and interfaces.'}
                        description={'The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.'}
                        />
                    </ul>
                </ProjectBackgroundCard>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 35 }}
            transition={{ duration: 1, delay: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}

            className={'flex flex-col gap-8 w-full'}
            >
                <div
                className={'relative rounded-xl overflow-hidden w-full aspect-[1.3/1]'}
                >
                    <Image src={'/markups/project1.jpg'} alt={'Project Image'} width={1920} height={2000} 
                    className={'object-cover absolute top-0 left-0 w-full h-full rounded-xl'}
                    />
                </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 35 }}
            transition={{ duration: 1, delay: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}

            className={'flex flex-col gap-8 w-full'}
            >
                <ProjectBackgroundCard
                title={'Solutions'}
                >
                    <ul className={'list-disc space-y-12'}>
                        <TitledListItem 
                        number={1}
                        title={'Bringing a new dimension to user experiences and interfaces.'}
                        description={'In the realm of technology, artificial intelligence (AI) and machine learning have emerged as game-changers, particularly in the field of UI/UX design. The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.'}
                        />

                        <TitledListItem 
                        number={2}
                        title={'Bringing a new dimension to user experiences and interfaces.'}
                        description={'The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges'}
                        />

                        <TitledListItem 
                        number={3}
                        title={'Bringing a new dimension to user experiences and interfaces.'}
                        description={'The integration of these advanced technologies is reshaping how we approach design, offering new possibilities and challenges. This post aims to explore how AI and machine learning are influencing the field of UI/UX, bringing a new dimension to user experiences and interfaces.'}
                        />
                    </ul>
                </ProjectBackgroundCard>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 35 }}
            transition={{ duration: 1, delay: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}

            className={'flex flex-col gap-8 w-full'}
            >
                <hr className={'w-full border-t-2 border-background-secondary-900/50'} />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 35 }}
            transition={{ duration: 1, delay: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}

            className={'flex flex-col gap-8 w-full'}
            >
                <ProjectBackgroundCard
                title={'Tools'}
                >
                    <div
                    className={'grid grid-cols-1 gap-1'}>
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
                </ProjectBackgroundCard>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 35 }}
            transition={{ duration: 1, delay: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}

            className={'flex flex-col gap-8 w-full'}
            >
                <TestimonialCard
                name={'John Doe'}
                title={'Software Engineer'}
                content={'We\'ve worked with Brandon multiple times, and it has always been a pleasure! He helped us craft engaging landing pages that convert well. Brandon works in a very timely manner and always ensures that you are fully satisfied with the results!'}
                
                />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 35 }}
            transition={{ duration: 1, delay: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}

            className={'flex flex-col gap-8 w-full'}
            >
                <ProjectBackgroundCard
                title={'Conclusion'}
                >
                    <P>
                    Sword API is a powerful, easy-to-use, and flexible API testing tool that allows you to test your API endpoints with ease.
                    </P>
                </ProjectBackgroundCard>
            </motion.div>
        </main>
    );
}
