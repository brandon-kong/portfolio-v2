import { H1, P, SlideIn } from "@/components";
import BlogSection from "@/components/blog-section";

export const revalidate = 30;

export default async function Blog() {
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
                <BlogSection />
            </SlideIn>
        </main>
    );
}
