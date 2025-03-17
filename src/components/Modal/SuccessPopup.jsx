import React from "react";
import Image from "next/image";
import { ModalWindow } from ".";
import checkImage from "@/assets/images/check.png";

const MODAL_TITLE = "Great!";
const MODAL_TEXT = "Congrats on completing the tour!";
const BUTTON_TEXT = "Continue";

const SuccessPopup = ({ isOpen, hideModal }) => {
  return (
    <ModalWindow
      hideModal={hideModal}
      isOpen={isOpen}
      isActivePortal
      className="fixed top-1/2 left-1/2 z-9999 -translate-x-1/2 -translate-y-0"
      overlayClassName="fixed inset-0 bg-opacity-10 backdrop-blur-sm z-9999 flex items-center justify-center"
    >
      <div className="flex h-100 w-125 flex-col items-center justify-center gap-8 rounded-4xl bg-[#333763] text-white">
        <h2 className="text-2xl">{MODAL_TITLE}</h2>
        <Image src={checkImage} alt="check" width={150} height={150} />
        <p>{MODAL_TEXT}</p>
        <button
          className="h-10 rounded-xl bg-[#5C47F9] px-6 text-sm transition-transform duration-300 hover:scale-95"
          onClick={hideModal}
        >
          {BUTTON_TEXT}
        </button>
      </div>
    </ModalWindow>
  );
};

export default SuccessPopup;
