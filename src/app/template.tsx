// app/template.tsx
"use client"
import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "tween", duration: 0.5 }}
      className="w-full"
    >
      {children}
    </motion.main>
  )
}