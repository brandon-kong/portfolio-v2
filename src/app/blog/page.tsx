'use client';

import { BlogCard, H1, P, BlogCardProps, SlideIn } from "@/components";

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
        link: `${BLOG_URL}/testing`,
        date: 'Aug 2023'
    },
    {
        title: 'The Future of UX: Embracing AI and Machine Learning',
        description: 'In the ever-evolving landscape of technology, AI and machine learning have emerged as pivotal elements in shaping the future of UI/UX design.',
        tags: ['Research', 'Bioinformatics'],
        image: '/blog/blog3.jpg',
        link: `${BLOG_URL}/testing`,
        date: 'Aug 2023'
    },
]

export default function Blog() {
    return (
        <main className="w-full flex flex-col space-y-20 sidebar-shown:space-y-32">
            <div
            className={'w-full flex flex-col gap-8'}
            >
                <div
                className={'flex flex-col gap-2'}
                >
                    <H1>Blog</H1>
                    
                    <P
                    className={'text-background-secondary-300'}
                    >
                        I write about my experiences, thoughts, and ideas. I also share my research and findings in the field of bioinformatics and computer science.
                    </P>
                </div>
            </div>

            <SlideIn>
                <div
                className={'flex flex-col gap-8 sidebar-shown:gap-16 '}>
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
