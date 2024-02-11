'use client';

import cn from "@/util/cn";
import { motion } from "framer-motion";

export type SlideInProps = {
    children: React.ReactNode
    className?: string
}

export const SlideIn: React.FC<SlideInProps> = ({ children, className }: SlideInProps) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 35 }}
    transition={{ duration: 1, delay: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}

    className={cn('flex flex-col gap-8 w-full', className)}
    >
        {children}
    </motion.div>
  );
};

export default SlideIn;