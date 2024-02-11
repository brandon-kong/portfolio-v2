'use client';

import { Button, ProjectCard, BlogCard, H1, H2, P, Tag, BlogCardProps } from "@/components";
import { Briefcase, MapPin } from "react-feather";

import { motion } from "framer-motion";

const selectedWork = [
    {
        title: 'Chess Engine',
        description: 'A powerful chess engine that uses machine learning to predict the best moves.',
        image: '/markups/chess.jpg',
        link: '/projects/chess-engine'
    },
    {
        title: 'Faceade',
        description: 'A multiplayer game using facial recognition',
        image: '/markups/faceade.jpg',
        link: '/projects/faceade'
    },
    {
        title: 'DePaul University',
    },
    {
        title: 'DePaul University',
    }
]

export default function Projects() {
    return (
        <main className="w-full flex flex-col space-y-20 sidebar-shown:space-y-32">
            <div
            className={'w-full flex flex-col gap-8'}
            >
                <div
                className={'flex flex-col gap-2'}
                >
                    <H1>Projects</H1>
                    
                    <P
                    className={'text-background-secondary-300'}
                    >
                        A showcase of my work and research
                    </P>
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
                className={'grid grid-cols-1 lg:grid-cols-2 gap-8'}>
                    {selectedWork.map((work, index) => {
                        return (
                            <ProjectCard
                            key={index}
                            title={work.title}
                            description={work.description || 'Research Assistant'}
                            tags={['Research', 'Bioinformatics']}
                            image={work.image || '/markups/project1.jpg'}
                            link={work.link || 'https://depaul.edu'}
                            />
                        )
                    })}
                </div>
            </motion.div>
        </main>
    );
}
