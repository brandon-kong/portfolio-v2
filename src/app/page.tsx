import { Button, H1, H2, P } from "@/components";
import { Briefcase, MapPin } from "react-feather";

const selectedWork = [
    {
        img: 'https://via.placeholder.com/150',
        title: 'DePaul University',
    }
]
export default function Home() {
    return (
        <main className="w-full p-32 bg-background-secondary h-full rounded-xl flex flex-col space-y-40 items-center">
            <div
            className={'max-w-4xl w-full flex flex-col gap-8'}
            >
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
            
        </main>
    );
}
