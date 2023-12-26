"use client";
import { FadeIn, fadeIn } from "@/utils/animation";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  animation: FadeIn;
}

export const Animation = ({ children, className, animation }: Props) => {
  return (
    <AnimatePresence mode={'wait'}>
      <motion.div
        className={className}
        variants={fadeIn(animation.direction, animation.delay)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
