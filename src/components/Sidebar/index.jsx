import { useState } from "react";
import cn from "classnames";
import { Accordion } from "../Accordion";
import { AccordionItem } from "../Accordion/AccordionItem";
import { Form } from "../Form";
import DataEntryPopup from "../Modal/DataEntryPopup";
import SuccessPopup from "../Modal/SuccessPopup";

export default function Sidebar() {
  const [invalidCount, setInvalidCount] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [isOpenModalTip, setIsOpenModalTip] = useState(true);

  const handleCloseModalTip = () => {
    setIsOpenModalTip(false);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div
      className={cn(
        "h-screen w-full max-w-[328px] rounded-2xl bg-[#F8F9FD] p-4",
      )}
    >
      <Accordion title="Data Entry">
        <div className="flex flex-col gap-2">
          <AccordionItem
            title="Employer"
            warning={invalidCount > 0}
            count={invalidCount}
          >
            <Form setInvalidCount={setInvalidCount} />
          </AccordionItem>
          <AccordionItem title="Document Details" />
          <AccordionItem title="Employee" />
        </div>
      </Accordion>

      {invalidCount > 0 && (
        <DataEntryPopup
          isOpen={isOpenModalTip}
          hideModal={handleCloseModalTip}
        />
      )}
      {invalidCount === 0 && (
        <SuccessPopup isOpen={isOpenModal} hideModal={handleCloseModal} />
      )}
    </div>
  );
}
