let ROOT_ELEMENT;
let MODAL_ROOT_ELEMENT;

if (typeof document !== "undefined") {
  ROOT_ELEMENT = document.getElementById("root");
  MODAL_ROOT_ELEMENT = document.getElementById("modal-root");
}

export { ROOT_ELEMENT, MODAL_ROOT_ELEMENT };
