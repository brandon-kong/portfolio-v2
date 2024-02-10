import { Button, H1, P } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="global flex justify-center items-center gap-10">

        <div
        >
            <H1>Uh Oh!</H1>
            <P>Looks like you&apos;re lost. Let&apos;s get you back on track.</P>
            <Button
            href={'/'}
            variant={'outline'}
            className={'mt-8'}
            >
                Go home
            </Button>
        </div>
        

        <Image src={'/gifs/quack.gif'} alt={'404 Duck'} width={300} height={300} className={'mt-8'} />
    </div>
  );
}