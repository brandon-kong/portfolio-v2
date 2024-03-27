
import React from "react";

import { Button, H1, P, Tag, TitledListItem, SlideIn } from "@/components";
import { ChevronLeft, Eye } from "react-feather";

import Image from "next/image";
import GridCard from "@/components/grid-card";
import Link from "next/link";
import ProjectBackgroundCard from "@/components/project-background-card";
import TestimonialCard from "@/components/testimonial";
import { getProject } from "@/util/projects";
import { notFound } from "next/navigation";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default async function Project({ params }: { params: { slug: string } }) {

    const project = await getProject(params.slug);

    if (!project) {
        return notFound();
    }

    return (
        <main className="w-full flex flex-col gap-20 sidebar-shown:space-y-3 -mt-10 sidebar-shown:-mt-20">
        
            <div
            className={'w-full border-b-2 border-background-secondary-light-300/50 dark:border-background-secondary-900/50 flex items-center gap-2 pb-5'}
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
                    {
                        project.tags.map(( tag, index ) => {
                            return (
                                <Tag key={index}>{ tag }</Tag>
                            )
                        })
                    }
                </div>

                <div
                className={'flex flex-col flex-1 gap-10'}
                >
                    <div className={'space-y-2'}>
                        <H1> { project.name }</H1>
                        <P
                        className={'text-background-secondary-300'}
                        >
                        { project.description }
                        </P>
                    </div>
                    
                    
                    <div
                    className={'flex gap-4 items-center'}
                    >
                        {
                            project.links.github && 
                            <Button
                            href={project.links.github}
                            variant={'background'}
                            target={'_blank'}
                            className={'gap-3 px-4'}
                            >
                                <FontAwesomeIcon icon={faGithub} className={'w-5 h-5'} />
                                View Source
                            </Button>
                        }

                        {
                            project.links.live && 
                            <Button
                            href={project.links.live}
                            target={'_blank'}
                            variant={'background'}
                            className={'gap-3 px-4'}
                            >
                                <Eye size={20} className={'w-5 h-5'} />
                                View Live
                            </Button>
                        }

                    </div>
                    
                   
                </div>
            </div>

            <SlideIn>
                <div
                className={'relative rounded-xl overflow-hidden w-full aspect-[1.3/1]'}
                >
                    <Image src={project.head_image || '/markups/project1.jpg'} alt={'Project Image'} width={1920} height={2000} 
                    className={'object-cover absolute top-0 left-0 w-full h-full rounded-xl'}
                    />
                </div>
            </SlideIn>
            

            <SlideIn>

                <ProjectBackgroundCard
                title={'Background'}
                >
                    <P>
                    { project.background.content }
                    </P>
                </ProjectBackgroundCard>
                
            </SlideIn>
            
            <SlideIn>
                <hr className={'w-full border-t-2 border-background-secondary-light-300/50 dark:border-background-secondary-900/50'} />
            </SlideIn>
            

            <SlideIn>
                <ProjectBackgroundCard
                title={'Goals'}
                >
                    <ul className={'list-disc space-y-12'}>
                        {project.goals.map((goal, index) => {
                            return (
                                <TitledListItem 
                                key={index}
                                number={index + 1}
                                title={goal.title}
                                description={goal.content}
                                />
                            )
                        })}
                    </ul>
                </ProjectBackgroundCard>
            </SlideIn>

            <SlideIn>
                <div
                className={'relative rounded-xl overflow-hidden w-full aspect-[1.3/1]'}
                >
                    <Image src={project.secondary_image || '/markups/project1.jpg'} alt={'Project Image'} width={1920} height={2000} 
                    className={'object-cover absolute top-0 left-0 w-full h-full rounded-xl'}
                    />
                </div>
            </SlideIn>

            <SlideIn>
                <ProjectBackgroundCard
                title={'Solutions'}
                >
                    <ul className={'list-disc space-y-12'}>
                        {project.solutions.map((solution, index) => {
                            return (
                                <TitledListItem 
                                key={index}
                                number={index + 1}
                                title={solution.title}
                                description={solution.content}
                                />
                            )
                        })}
                    </ul>
                </ProjectBackgroundCard>
            </SlideIn>

            <SlideIn>
            <hr className={'w-full border-t-2 border-background-secondary-light-300/50 dark:border-background-secondary-900/50'} />
            </SlideIn>

            <SlideIn>
                <ProjectBackgroundCard
                title={'Tools'}
                >
                    <div
                    className={'grid grid-cols-1 gap-1'}>
                        {project.tools.map((prog, index) => {
                            return (
                                <GridCard
                                className={
                                    `${index === 0 ? 'rounded-t-xl' : ''} ${index === project.tools.length - 1 ? 'rounded-b-xl' : ''}`}
                                key={index}
                                >
                                    { prog.name }
                                </GridCard>
                            )
                        })}
                    </div>
                </ProjectBackgroundCard>
            </SlideIn>

            <SlideIn>
                <TestimonialCard
                name={project.testimonial.name}
                title={project.testimonial.title}
                content={project.testimonial.content}
                
                />
            </SlideIn>

            <SlideIn>
                <ProjectBackgroundCard
                title={'Conclusion'}
                >
                    <P>
                        { project.conclusion.content }
                    </P>
                </ProjectBackgroundCard>
            </SlideIn>
        </main>
    );
}
