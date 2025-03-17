import Image from "next/image";
import { ModalWindow } from ".";
import textBoxIcon from "@/assets/icons/text-box.svg";

const MODAL_TITLE = "Data Entry";
const MODAL_TEXT =
  "Do not spend too much time filling out the same information again and again.";

const BUTTON_TEXT = "Autofill";

const DataEntryPopup = ({ isOpen, hideModal }) => {
  return (
    <ModalWindow
      hideModal={hideModal}
      isOpen={isOpen}
      isActivePortal
      className="fixed top-90 left-0 z-50 -translate-x-1/2 -translate-y-1/2 rounded-3xl px-10"
      overlayClassName="absolute top-0 right-0 bottom-0 left-[175px] bg-opacity-10 backdrop-blur-xs z-50 flex items-center justify-center"
    >
      <div className="relative w-82 rounded-3xl bg-[#333763] p-4 text-white">
        <div className="absolute top-10 left-0 -translate-x-1/2 -translate-y-1/2 rotate-45 border-t-[16px] border-l-[16px] border-t-[#333763] border-l-transparent bg-[#333763]"></div>

        <div className="flex items-center gap-2">
          <span className="flex h-12 w-12 justify-center rounded-2xl bg-white">
            <Image src={textBoxIcon} alt="icon" width={24} height={24} />
          </span>
          <h2 className="text-lg">{MODAL_TITLE}</h2>
        </div>
        <p className="my-4">{MODAL_TEXT}</p>
        <div className="flex items-center justify-end">
          <button
            className="h-10 rounded-xl bg-[#5C47F9] px-6 text-sm transition-transform duration-300 hover:scale-95"
            onClick={hideModal}
          >
            {BUTTON_TEXT}
          </button>
        </div>
      </div>
    </ModalWindow>
  );
};

export default DataEntryPopup;
