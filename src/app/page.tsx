import { Button, BlogCard, H1, H2, P, Tag, BlogCardProps, SlideIn, ProjectSection } from "@/components";
import { Briefcase, MapPin } from "react-feather";

import { SITE_URL, BLOG_URL } from "@/util/variables";

const blogs: BlogCardProps[] = [
    {
        title: 'The Future of UX: Embracing AI and Machine Learning',
        description: 'In the ever-evolving landscape of technology, AI and machine learning have emerged as pivotal elements in shaping the future of UI/UX design.',
        tags: ['Research', 'Bioinformatics'],
        image: '/blog/blog1.jpg',
        link: `${BLOG_URL}/testing`,
        date: 'Aug 2023'
    },
    {
        title: 'The Future of UX: Embracing AI and Machine Learning',
        description: 'In the ever-evolving landscape of technology, AI and machine learning have emerged as pivotal elements in shaping the future of UI/UX design.',
        tags: ['Research', 'Bioinformatics'],
        image: '/blog/blog2.jpg',
        link: `blog.${BLOG_URL}/testing`,
        date: 'Aug 2023'
    },
    {
        title: 'The Future of UX: Embracing AI and Machine Learning',
        description: 'In the ever-evolving landscape of technology, AI and machine learning have emerged as pivotal elements in shaping the future of UI/UX design.',
        tags: ['Research', 'Bioinformatics'],
        image: '/blog/blog3.jpg',
        link: `blog.${BLOG_URL}/testing`,
        date: 'Aug 2023'
    },
]

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
                        <Briefcase className="w-5 h-5 stroke-primary-400" />
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

                <div
                className={'flex flex-col gap-8 sidebar-shown:gap-16'}>
                    {blogs.map((blog, index) => {
                        return (
                            <BlogCard
                            key={index}
                            title={blog.title}
                            description={blog.description}
                            date={blog.date}
                            tags={['Research', 'Bioinformatics']}
                            image={blog.image}
                            link={blog.link}
                            />
                        )
                    })}
                </div>
            </SlideIn>
        </main>
    );
}
