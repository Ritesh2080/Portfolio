"use client";
import { motion } from "motion/react";
import Image from "next/image";
type Tag = {
  id: string | number;
  name: string;
  path: string;
};

type ProjectDetailsProps = {
  title: string;
  description: string;
  subDescription: string[];
  image: string;
  tags: Tag[];
  href: string;
  closeModal: () => void;
};
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}:ProjectDetailsProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm z-10 top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <Image height={24} width={24} alt="close" src="/assets/close.svg" className="w-6 h-6" />
        </button>
        <div className="relative w-full h-90 rounded-t-2xl overflow-hidden">
  <Image
    src={image}
    alt={title}
    fill
    className="object-cover"
  />
</div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <Image
                width={40}
                height={40}
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <a className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation" href={href}>
              View Project{" "}
              <Image width={16} height={16} src="/assets/arrow-up.svg" alt="close" className="size-4"  />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
