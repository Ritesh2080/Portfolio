"use client"
import { useRef } from "react";
import Card from "@/components/Card";
import Image from "next/image";
import { Globe } from "@/components/globe";
import CopyEmailButton from "@/components/copyEmailButton";
import { Frameworks } from "@/components/Frameworks";

const About = () => {
  const grid2Container = useRef<HTMLDivElement>(null);
  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <Image
          alt="coding pov"
            width={600}
            height={600}
            src="/assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[1rem] -top-[8rem] md:scale-[2] md:top-[20px] md:-right-[80px]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I&apos;m Ritesh</p>
            <p className="subtext">
             I&apos;m a Full-Stack Developer in the making, passionate about building modern, responsive, and scalable web applications.
              I&apos;ve trained myself in both frontend and backend development, and I love turning ideas into reality through code.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        {/* <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="FRONTEND"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="BACKEND"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="DEPLOYMENT"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/docker-logo-blue.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/git.svg"
              containerRef={grid2Container}
            />
               <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "75%", left: "10%" }}
              image="assets/logos/css3.svg"
              containerRef={grid2Container}
            />
             <Card
              style={{ rotate: "-45deg", top: "65%", left: "80%" }}
              image="assets/logos/html5.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "30%" }}
              image="assets/logos/python.svg"
              containerRef={grid2Container}
            />
             <Card
              style={{ rotate: "-45deg", top: "45%", left: "80%" }}
              image="assets/logos/c.png"
              containerRef={grid2Container}
            />
             <Card
              style={{ rotate: "-45deg", top: "5%", left: "80%" }}
              image="assets/logos/kubernetes.png"
              containerRef={grid2Container}
            />
             <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/chatgpt.svg"
              containerRef={grid2Container}
            />
             <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/aws.png"
              containerRef={grid2Container}
            />
          </div>
        </div> */}
        <div className="grid-default-color grid-2">
  <div
    ref={grid2Container}
    className="flex items-center justify-center w-full h-full relative"
  >
    <p className="flex text-center items-end text-5xl text-gray-500">
      CODE IS CRAFT
    </p>

    <Card
      style={{ rotate: "15deg", top: "20%", left: "15%" }}
      text="FRONTEND"
      containerRef={grid2Container}
    />
    <Card
      style={{ rotate: "-40deg", top: "70%", left: "5%" }}
      text="BACKEND"
      containerRef={grid2Container}
    />
    <Card
      style={{ rotate: "50deg", top: "60%", left: "55%" }}
      text="DEPLOYMENT"
      containerRef={grid2Container}
    />

    <Card
      style={{ rotate: "10deg", top: "0%", left: "60%" }}
      image="assets/logos/docker-logo-blue.png"
      containerRef={grid2Container}
    />
   
    <Card
      style={{ rotate: "5deg", top: "75%", left: "45%" }}
      image="assets/logos/javascript.svg"
      containerRef={grid2Container}
    />
    <Card
      style={{ rotate: "-30deg", top: "50%", left: "90%" }}
      image="assets/logos/react.svg"
      containerRef={grid2Container}
    />

  
    <Card
      style={{ rotate: "-10deg", top: "10%", left: "85%" }}
      image="assets/logos/python.svg"
      containerRef={grid2Container}
    />
    <Card
      style={{ rotate: "-25deg", top: "5%", left: "0%" }}
      image="assets/logos/c.png"
      containerRef={grid2Container}
    />
    <Card
      style={{ rotate: "10deg", top: "55%", left: "0%" }}
      image="assets/logos/aws.png"
      containerRef={grid2Container}
    />
  </div>
</div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I&apos;m based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className={"z-10 w-[43%] md:w-[50%]"}>
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
