import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames";
import { motion } from "framer-motion";
import arowIcon from "@/assets/icons/arrow.svg";
import textBoxIcon from "@/assets/icons/text-box.svg";
import infoIcon from "@/assets/icons/info.svg";

export const Accordion = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={cn("rounded-2xl", className)}>
      <button
        className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Image src={textBoxIcon} alt="icon" width={24} height={24} />
          <p className="text-lg font-semibold text-black">{title}</p>
          <Image src={infoIcon} alt="info" width={20} height={20} />
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={arowIcon} alt="arrow" width={20} height={20} />
        </motion.div>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="text-gray-600">{children}</div>
      </motion.div>
    </div>
  );
};
