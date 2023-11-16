"use client"
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/outline";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] "
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          className="Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]"
          variants={slideInFromTop}
        >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5"/>
            <h1 className="Welcome-text text-[13px]">Fullstack Developer Portoflio</h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
