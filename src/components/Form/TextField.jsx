import React from "react";
import Image from "next/image";
import cn from "classnames";
import copyIcon from "@/assets/icons/copy.svg";

const TextField = ({ label, value, onChange, error }) => {
  const valueCount = Math.max(5 - value.length, 0);

  const handleCopy = () => {
    if (value) navigator.clipboard.writeText(value);
  };

  return (
    <>
      <div className="my-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <label className="block text-base font-medium text-gray-700">
            {label}
          </label>

          <span
            className={cn(
              "flex w-4 items-center justify-center rounded-xs bg-[#EDEEF2] text-xs text-[#87878A]",
              valueCount <= 0 && "bg-green-500 text-white",
            )}
          >
            {valueCount}
          </span>
        </div>
        <button
          className="duration-300 hover:scale-95"
          title="Copy to clipboard"
          type="button"
          onClick={handleCopy}
        >
          <Image src={copyIcon} alt="copy" width={20} height={20} />
        </button>
      </div>
      <input
        type="text"
        className={cn(
          "w-full rounded-md border p-2 text-xs text-gray-700 transition-shadow duration-300 focus:shadow-xs focus:ring-1 focus:shadow-gray-400 focus:outline-none",
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-gray-400",
        )}
        placeholder="Enter value"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default TextField;
