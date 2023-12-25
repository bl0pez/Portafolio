import { SVGProps } from "react";
const Right = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#fff"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 5 5.15 5a2.739 2.739 0 0 1 0 4L9 19"
    />
  </svg>
);
export default Right;
