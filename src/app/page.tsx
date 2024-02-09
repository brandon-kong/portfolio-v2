import { Button, H1, H2, P, Tag } from "@/components";
import ProjectCard from "@/components/project-card";
import { Briefcase, MapPin } from "react-feather";

const selectedWork = [
    {
        img: 'https://via.placeholder.com/150',
        title: 'DePaul University',
    },
    {
        img: 'https://via.placeholder.com/150',
        title: 'DePaul University',
    },
    {
        img: 'https://via.placeholder.com/150',
        title: 'DePaul University',
    },
    {
        img: 'https://via.placeholder.com/150',
        title: 'DePaul University',
    }
]

export default function Home() {
    return (
        <main className="w-full flex flex-col space-y-32 items-center">
            <div
            className={'max-w-4xl w-full flex flex-col gap-8'}
            >
                <Tag variant={'primary'}>
                    Available for work
                </Tag>
                <div>
                    <H1> Hello! I{'\’'}m Brandon 👋</H1>
                    <H1 className={'text-background-secondary-300'}>
                        Code. Code. Repeat. 🚀
                    </H1>
                </div>

                <div
                className={'flex items-center space-x-2'}
                >
                    <MapPin className="w-5 h-5 stroke-primary-300" />
                    <P className="text-primary-300 text-md">
                        Chicago, Illinois
                    </P>
                </div>

                <P
                className={'text-paragraph text-background-secondary-300'}
                >
                    I{'\’'}m a software engineer with a passion for building products that make a difference. 
                    I{'\’'}m currently working as a research assistant at DePaul University, where I{'\’'}m 
                    working in Bioinformatics and Computational Biology in the context of brainstem nuclei 
                    boundary classification. 
                </P>

                <div
                className={'flex space-x-4'}
                >
                    <Button
                    variant={'background'}
                    >
                        About
                    </Button>

                    <Button
                    variant={'outline'}
                    className={'flex gap-2 items-center'}
                    >
                        <Briefcase className="w-5 h-5 stroke-primary-400" />
                        Projects
                    </Button>
                </div>
                
            </div>

            <div
            className={'flex flex-col gap-8 w-full max-w-4xl'}
            >
                <H2>Selected Work</H2>

                <div
                className={'grid grid-cols-2 gap-8'}>
                    {selectedWork.map((work, index) => {
                        return (
                            <ProjectCard
                            key={index}
                            title={work.title}
                            description={'Research Assistant'}
                            tags={['Research', 'Bioinformatics']}
                            image={work.img}
                            link={'https://depaul.edu'}
                            />
                        )
                    })}
                </div>


            </div>
            
        </main>
    );
}
