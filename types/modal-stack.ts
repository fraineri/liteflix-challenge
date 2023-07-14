import { MODAL_SECTION } from "@/common/enum";

export type ModalStackState = {
  modalStack: MODAL_SECTION[];
};

export type ModalStackAction = {
  type: "PUSH_MODAL" | "POP_MODAL" | "CLOSE_MODAL" | "CLEAR_ALL";
  payload?: MODAL_SECTION;
};

export type ModalStackDispatch = (action: ModalStackAction) => void;
