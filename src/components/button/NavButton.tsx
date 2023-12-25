import { SVGMotionProps, motion } from "framer-motion";
import { JSX, RefAttributes } from "react";

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

interface props {
  toggle: boolean;
  onToggle: () => void;
}

const NavButton = ({ toggle, onToggle }: props) => {
  return (
    <motion.button
      animate={toggle ? "open" : "closed"}
      className="p-2 relative z-30"
      onClick={onToggle}
    >
      <svg viewBox="0 0 23 23" className="w-9 h-9">
        <Path
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <Path
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  );
};

export default NavButton;

{
  /* <svg viewBox="0 0 23 23" className="w-9 h-9">
  <Path
    initial="closed"
    variants={{
      closed: { d: "M 2 2.5 L 20 2.5" },
      open: { d: "M 2 16.5 L 20 2.5" },
    }}
  />
  <Path
    initial="closed"
    variants={{
      closed: { opacity: 1 },
      open: { opacity: 0 },
    }}
    d="M 2 9.423 L 20 9.423"
  />
  <Path
    initial="closed"
    variants={{
      closed: { d: "M 2 16.346 L 20 16.346" },
      open: { d: "M 2 2.5 L 20 16.346" },
    }}
  />
</svg>; */
}
