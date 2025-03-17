import { useEffect, useCallback } from "react";
import { ROOT_ELEMENT, MODAL_ROOT_ELEMENT } from "@/constants/rootElements";

export const useClickOutside = (
  ref,
  callback,
  isActive = true,
  isActivePortal,
) => {
  const ACTIVE_ROOT_ELEMENT = isActivePortal
    ? MODAL_ROOT_ELEMENT
    : ROOT_ELEMENT;

  const handleClick = useCallback(
    ({ target }) => {
      if (ref.current && !ref.current.contains(target)) {
        callback();
      }
    },
    [ref, callback],
  );

  useEffect(() => {
    if (isActive) {
      ACTIVE_ROOT_ELEMENT.addEventListener("click", handleClick);

      return () => {
        ACTIVE_ROOT_ELEMENT.removeEventListener("click", handleClick);
      };
    }
  }, [handleClick, isActive, ACTIVE_ROOT_ELEMENT]);
};
