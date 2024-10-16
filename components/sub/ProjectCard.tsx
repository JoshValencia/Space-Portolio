import Image from "next/image";
import React from "react";

export interface ProjectCardProps {
  src?: string;
  title: string;
  description: string;
  link?: string;
}

const ConditionalWrapper = ({
  link,
  children,
}: {
  link: string;
  children: any;
}) => {
  const classNames =
    "relative overflow-hidden rounded-lg shadow-lg border border-[#eed1c1] min-w-52 block";
  if (link !== "") {
    return <a className={classNames}>{children}</a>;
  }
  return <div className={classNames}>{children}</div>;
};

const ProjectCard = ({
  src = "",
  title,
  description,
  link = "",
}: ProjectCardProps) => {
  return (
    <ConditionalWrapper link={link}>
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </ConditionalWrapper>
  );
};

export default ProjectCard;
