import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useClickOutside } from "@/hooks/useClickOutside";
import { MODAL_ROOT_ELEMENT } from "@/constants/rootElements";

// Варіанти анімації для модалки
const modalVariants = {
  hidden: { opacity: 0, scale: 0.5, y: "100%" },
  visible: { opacity: 1, scale: 1, y: "-50%" },
  exit: { opacity: 0, scale: 0.5, y: "100%" },
};

// Варіанти анімації для накладки
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const ModalWindow = ({
  children,
  overlayClassName,
  className,
  isOpen,
  isActivePortal,
  isActiveCloseClickOutside = true,
  hideModal,
}) => {
  const modalRef = useRef(null);
  const isActiveClickOutside = isOpen && isActiveCloseClickOutside;
  useClickOutside(modalRef, hideModal, isActiveClickOutside, isActivePortal);

  const component = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed top-0 right-0 bottom-0 left-[388px] z-50">
          <motion.div
            className={overlayClassName}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <motion.div
              ref={modalRef}
              className={className}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return isActivePortal && MODAL_ROOT_ELEMENT
    ? createPortal(component, MODAL_ROOT_ELEMENT)
    : component;
};
