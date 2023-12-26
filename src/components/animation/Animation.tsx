"use client";
import { fadeIn } from "@/utils/animation";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Animation = ({ children, className }: Props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
