import { Button, H1, H2, P, Tag, SlideIn, ProjectSection } from "@/components";
import { Briefcase, MapPin } from "react-feather";

import BlogSection from "@/components/blog-section";

export const revalidate = 30;

export default function Home() {
    return (
        <main className="w-full flex flex-col space-y-20 sidebar-shown:space-y-32 items-center">
            <div
            className={'w-full flex flex-col gap-8'}
            >
                <Tag variant={'primary'}>
                    Available for work
                </Tag>
                <div>
                    <H1> Hello! I{'\’'}m Brandon 👋</H1>
                    <H1 className={'text-background-secondary-500 dark:text-background-secondary-300'}>
                        Code. Code. Repeat. 🚀
                    </H1>
                </div>

                <div
                className={'flex items-center space-x-2'}
                >
                    <MapPin className="w-5 h-5 stroke-primary-600 dark:stroke-primary-300" />
                    <P className="text-primary-600 dark:text-primary-300 text-md">
                        Chicago, Illinois
                    </P>
                </div>

                <P
                className={'text-paragraph text-background-secondary-400 dark:text-background-secondary-300'}
                >
                    I{'\’'}m a software engineer with a passion for building products that make a difference. 
                    I{'\’'}m currently working as a research assistant at DePaul University, where I{'\’'}m 
                    working in Bioinformatics and Computational Biology in the context of brainstem nuclei 
                    boundary classification. 
                </P>

                <div
                className={'flex flex-col sidebar-shown:flex-row  gap-4'}
                >
                    <Button
                    href={'/about'}
                    variant={'background'}
                    >
                        About
                    </Button>

                    <Button
                    href={'/projects'}
                    variant={'outline'}
                    className={'flex gap-2 items-center'}
                    >
                        <Briefcase className="w-5 h-5 stroke-primary-600 dark:stroke-primary-400" />
                        Projects
                    </Button>
                </div>
                
            </div>

            <SlideIn>
                <H2>Selected Work</H2>

                <ProjectSection />
            </SlideIn>

            <SlideIn>
                <H2>Blog</H2>

                <BlogSection />
            </SlideIn>
        </main>
    );
}
