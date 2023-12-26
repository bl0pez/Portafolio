"use client";
import Image from "next/image";
import { Link } from "react-scroll";

export const Logo = () => {
  return (
    <a
    href="#home"
    className="relative h-16 w-16 z-30 cursor-pointer"
  >
    <Image src="/logo.svg" alt="logo" fill priority />
  </a>
  )
}
