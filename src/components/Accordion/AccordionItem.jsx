import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames";
import { motion } from "framer-motion";
import arowIcon from "@/assets/icons/arrow.svg";
import warningIcon from "@/assets/icons/warning.svg";

const WARNING_TEXT = "Missing";

export const AccordionItem = ({
  title,
  children,
  className,
  warning,
  count,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={cn("rounded-2xl bg-white", className)}>
      <button
        className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 text-sm text-[#5C5C5E] uppercase">
          {title}
        </div>
        <div className="flex items-center gap-2">
          {warning && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-1"
            >
              <span className="text-xs text-orange-400">{count}</span>
              <Image src={warningIcon} alt="warning" width={16} height={16} />
            </motion.div>
          )}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={arowIcon} alt="arrow" width={16} height={16} />
          </motion.div>
        </div>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        {warning && (
          <div className="mb-4 h-4 w-full rounded-t-2xl border-t-3 border-orange-500 text-orange-500">
            <div className="flex items-center gap-1 p-2">
              <Image src={warningIcon} alt="warning" width={16} height={16} />
              <p className="text-sm uppercase">{WARNING_TEXT}</p>
            </div>
          </div>
        )}
        <div className="text-gray-600">{children}</div>
      </motion.div>
    </div>
  );
};
