"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <Link className="nav-link" href="#home">
          Home
        </Link>
      </li>
      <li className="nav-li">
        <Link className="nav-link" href="#about">
          About
        </Link>
      </li>

      <li className="nav-li">
        <Link className="nav-link" href="#contact">
          Contact
        </Link>
      </li>
      <li className="nav-li">
        <Link className="nav-link" href="https://github.com/Ritesh2080">
          Github
        </Link>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className = {`fixed inset-x-0 z-20 w-full p-2 ${isOpen ? "backdrop-blur-lg bg-primary/40":"backdrop-blur-[1px] bg-white/5 border-b border-white/5"}`}>
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <Link
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Ritesh
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <Image
              width={24}
              height={24}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
  className="block sm:hidden text-center"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3 }}
>
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
