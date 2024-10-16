import React from "react";

import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { Experiences } from "@/constants";
import ExperienceDataProvider from "../sub/ExperienceDataProvider";

function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden  py-10"
      style={{ transform: "scale(0.9" }}
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-400 pb-10">
        Work Experiences
      </h1>
      <Timeline className="max-w-2xl">
        {Experiences.map((experience, index) => (
          <ExperienceDataProvider
            key={index}
            title={experience.title}
            time={experience.time}
            body={experience.body}
            link={experience.link || ""}
            linkText={experience.linkText || "Learn More"}
            skills={experience.skills || []}
          />
        ))}
      </Timeline>
    </section>
  );
}

export default Experience;
