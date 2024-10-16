import {
  Button,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

import React from "react";
import { useInView } from "react-intersection-observer";

export interface ExperienceProps {
  time: string;
  title: string;
  body: string;
  link?: string;
  linkText?: string;
  skills?: string[];
}

const ExperienceDataProvider = ({
  time,
  title,
  body,
  link = "",
  linkText = "Learn More",
  skills = [],
}: ExperienceProps) => {
  return (
    <TimelineItem>
      <TimelinePoint />
      <TimelineContent>
        <TimelineTime>{time}</TimelineTime>
        <TimelineTitle className="text-white">{title}</TimelineTitle>
        <TimelineBody className="text-[#eed1c1]">{body}</TimelineBody>
        {link !== "" && <Button color="gray">{linkText}</Button>}
        {skills.length !== 0 && (
          <p className="text-white">Skills: {skills.join(" · ")}</p>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

export default ExperienceDataProvider;
