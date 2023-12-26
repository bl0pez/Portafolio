"use client";
import Image from "next/image";
import { Link } from "react-scroll";

export const Logo = () => {
  return (
    <Link
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    to="home"
    className="relative h-16 w-16 z-30 cursor-pointer"
  >
    <Image src="/logo.svg" alt="logo" fill priority />
  </Link>
  )
}
