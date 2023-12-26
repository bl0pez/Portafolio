"use client";
import { Direction, fadeIn } from "@/utils/animation";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  direction: Direction;
}

export const Animation = ({ children, className, direction }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        className={className}
        variants={fadeIn(direction, 0.2)}
        initial="hidden"
        animate="show"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
