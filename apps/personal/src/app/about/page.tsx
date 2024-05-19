import { H2, P } from '@repo/ui/typography';
import { LocationCard } from '@repo/ui/card';
import { ProjectsContainer, BlogsContainer } from '@repo/ui/containers';
import { Button } from '@repo/ui/button';
import Image from 'next/image';

export default function About(): JSX.Element {
    return (
        <div className={'space-y-20'}>
            <div className={'space-y-10'}>
                <div className={'flex gap-6'}>
                    <div className={'space-y-10 max-w-xl'}>
                        <div className={'space-y-4'}>
                            <H2>Brandon Kong</H2>
                            <H2 className={'text-accent-foreground'}>
                                Full-Stack Developer
                            </H2>
                        </div>

                        <div className={'space-y-6'}>
                            <P className={'text-accent-foreground text-lg'}>
                                I&apos;m Brandon, a software engineer based in
                                Chicago, IL. I specialize in building robust,
                                user-friendly, and scalable applications and
                                software. I have a strong passion for developing
                                innovative solutions and solving complex
                                problems.
                            </P>
                            <P className={'text-accent-foreground text-lg'}>
                                Research assistant at DePaul University, where I
                                am currently pursuing a Bachelor of Science in
                                Computer Science. I have spoken at IEEE
                                conferences and have been actively involved in
                                research projects. Currently, I am working on a
                                project that will improve the public
                                transportation system in Chicago.
                            </P>
                        </div>
                    </div>

                    <Image
                        src={'/images/brandon.jpg'}
                        alt={'Brandon Kong'}
                        width={150}
                        height={150}
                        className={'rounded-full flex-shrink-0 self-start'}
                    />
                </div>
            </div>

            <ProjectsContainer title="Selected Work" limit={4} />

            <BlogsContainer title="Selected Writings" limit={4} />
        </div>
    );
}
