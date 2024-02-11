import { Button, H1, P, SlideIn } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="global flex flex-col sidebar-shown:flex-row justify-center items-center gap-10">

        <div
        >
            <H1>Uh Oh!</H1>
            <P className={'text-background-secondary-300'}>Looks like you&apos;re lost. Let&apos;s get you back on track.</P>
            <Button
            href={'/'}
            variant={'outline'}
            className={'w-full sidebar-shown:w-fit mt-8'}
            >
                Go home
            </Button>
        </div>
        
      <SlideIn className={'w-fit'}>
        <Image src={'/gifs/quack.gif'} alt={'404 Duck'} width={300} height={300} className={'mt-8'} />
      </SlideIn>
    </div>
  );
}