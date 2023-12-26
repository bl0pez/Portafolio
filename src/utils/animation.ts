export type Direction = "up" | "down" | "left" | "right";

export interface FadeIn {
  direction: Direction;
  delay: number;
}

export const fadeIn = (direction: Direction, delay: number) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      x: direction === "left" ? 10 : direction === "right" ? -10 : 0,
      transition: {
        type: "tween",
        duration: 1.0,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    exit: {
      opacity: 0,
      y: direction === "up" ? -80 : direction === "down" ? 80 : 0,
      x: direction === "left" ? -10 : direction === "right" ? 10 : 0,
      transition: {
        type: "tween",
        duration: 1.0,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
  };
};
