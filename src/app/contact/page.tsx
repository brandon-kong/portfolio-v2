'use client';

import { Button, H1, H2, Input, P, SlideIn, Textbox, Typography } from "@/components";

export default function Contact() {
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        const form = e.currentTarget;
        const formData = new FormData(form);
        
        // send form data to server

        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string
        }

        console.log(data);
    }
    
    return (
        <main className="w-full flex flex-col space-y-20 sidebar-shown:space-y-32">
            <div
            className={'w-full flex flex-col gap-8'}
            >
                <div
                className={'flex flex-col gap-2'}
                >
                    <H1>Contact me</H1>
                    
                    <P
                    className={'text-background-secondary-300'}
                    >
                        I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me if you have any questions or just want to chat.
                    </P>
                </div>
            </div>

            <SlideIn>
                <form
                onSubmit={onSubmit}
                className={'flex flex-col gap-4'}
                >
                    <Input name={'name'} label={'Name'} placeholder={'Enter your name'} />
                    <Input name={'email'} label={'Email'} placeholder={'Enter your email'}
                    type="email"
                    />

                    <Textbox name={'message'} label={'Message'} placeholder={'Enter your message'}
                    />

                    <Button>
                        Send
                    </Button>
                </form>
               
            </SlideIn>
        </main>
    );
}
