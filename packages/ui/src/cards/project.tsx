import Link from 'next/link';
import Image from 'next/image';
import { H3, H4, P } from '../typography';

import { TypeProject } from '@repo/utils/types';

type ProjectCardProps = {
    project: TypeProject;
};

export default function ProjectCard({
    project: {
        fields: { title, slug, background, coverImage },
    },
}: ProjectCardProps) {
    const imgUrl =
        'https://' +
        ((coverImage as any).fields.file.url as string).replace('//', '');
    return (
        <Link href={`/projects/${slug as string}`}>
            <div
                className={
                    'group w-full bg-transparent flex flex-col items-center justify-center gap-4'
                }
            >
                <div
                    className={
                        'aspect-[1.3/1] w-full relative bg-transparent rounded-xl overflow-hidden'
                    }
                >
                    <Image
                        src={imgUrl}
                        alt={title}
                        fill={true}
                        className={
                            'w-full h-full absolute group-hover:scale-110 transition-transform duration-500'
                        }
                    />
                    {}
                </div>

                <div className={'flex flex-col gap-1 w-full'}>
                    <H4 className={'font-medium'}>{title as string}</H4>
                    <P className={'text-md text-accent-foreground'}>
                        {background as string}
                    </P>
                </div>
            </div>
        </Link>
    );
}