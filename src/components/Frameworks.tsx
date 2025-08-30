"use client";
import Image from "next/image";
import { OrbitingCircles } from "./OrbitingCircles";
import { useMediaQuery } from "react-responsive";

export function Frameworks() {
  const skills = [
    "aws.png",
    "c.png",
    "chatgpt.svg",
    "css3.svg",
    "docker-logo-blue.png",
    "git.svg",
    "github.svg",
    "html5.svg",
    "javascript.svg",
    "kubernetes.png",
    "linux.png",
    "microsoft.svg",
    "nextjs.png",
    "python.svg",
    "react.svg",
    "tailwindcss.svg",
    "vitejs.svg",
    "typescript.png",
  ];
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const iconSize = isMobile ? 35 : 40;
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={iconSize}>
        {skills.map((skill, index) => (
          <Image
          key={index}
    width={iconSize}
    height={iconSize}
   src={`/assets/logos/${skill}`}
    alt="icon"
    className="duration-200 rounded-sm hover:scale-110"
  />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
        <Image
          key={index}
    width={iconSize}
    height={iconSize}
   src={`/assets/logos/${skill}`}
    alt="icon"
    className="duration-200 rounded-sm hover:scale-110"
  />
        ))}
      </OrbitingCircles>
    </div>
  );
}
