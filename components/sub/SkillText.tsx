"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#eed1c191] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#eed1c1] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Offers Modern Solution for Modern Clients
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Known Frameworks | Platforms | Languages
      </motion.div>
    </div>
  );
};

export default SkillText;
