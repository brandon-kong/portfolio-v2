import { BlogCard } from "..";
import { getPublishedEntries } from "@/util/retrieve";

import { BLOG_URL } from "@/util/variables";

export default async function BlogSection () {
    const blogs = await getPublishedEntries() || [];

    return (
        <div
        className={'flex flex-col gap-8 sidebar-shown:gap-16 '}>
            {blogs.items.map((item, index) => {
                
                const metadata = { 
                    title: item.fields.title as string, 
                    description: item.fields.description as string,
                    image: item.fields.featuredImage as any,
                    category: item.fields.category as string,
                    tags: item.fields.tags as string[] | undefined,
                    published: item.fields.published as boolean,
                    publish_date: item.fields.publishDate as string,
                
                    author: item.fields.author as string,
                    author_website: item.fields.authorWebsite as string | undefined,
                
                    slug: item.fields.slug,
                
                }

                return (
                    <BlogCard
                    key={index}
                    title={metadata.title}
                    description={metadata.description}
                    date={new Date(metadata.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                    tags={metadata.tags || []}
                    image={metadata.image.fields.file.url}
                    link={`${BLOG_URL}/${metadata.slug}`}
                    />
                )
            })}
        </div>
    )
}