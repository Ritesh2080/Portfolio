import { mySocials } from "@/constants";
import Image from "next/image";
const Footer = () => {
   const currentYear = new Date().getFullYear();
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
        <p>|</p>
        <p><a href="https://youtu.be/S9UQItTpwUQ?si=hmLOanlIoy_DP4rv">Attribution</a></p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <Image width={20} height={20} src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© {currentYear} Ritesh. All rights reserved.</p>
    </section>
  );
};

export default Footer;
