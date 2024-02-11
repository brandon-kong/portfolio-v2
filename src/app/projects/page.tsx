import { ProjectSection, BlogCard, H1, P, SlideIn } from "@/components";
import { getAllProjects } from "@/util/projects";

export default async function Projects() {
    const projects = await getAllProjects() || [];
    
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

            <SlideIn>
                <ProjectSection />
            </SlideIn>
        </main>
    );
}
