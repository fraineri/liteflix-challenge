"use client";

import {
  ModalStackAction,
  ModalStackDispatch,
  ModalStackState,
} from "@/types/modal-stack";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";

const ModalStackContext = createContext<{
  state: ModalStackState;
  dispatch: ModalStackDispatch;
} | null>(null);

const modalStackReducer = (
  state: ModalStackState,
  action: ModalStackAction
): ModalStackState => {
  switch (action.type) {
    case "PUSH_MODAL":
      return {
        modalStack: [...state.modalStack, action.payload?.section!],
      };
    case "POP_MODAL":
      return {
        modalStack: state.modalStack.slice(0, state.modalStack.length - 1),
      };
    case "CLOSE_MODAL":
      return {
        modalStack: state.modalStack.filter(
          (modal) => modal !== action.payload?.section
        ),
      };
    case "CLEAR_ALL":
      return {
        modalStack: [],
      };
    default:
      throw new Error("Unexpected modalStack action");
  }
};

const useModalStack = () => {
  const context = useContext(ModalStackContext);

  if (!context) {
    throw new Error("ModalStackProvider not found as parent.");
  }

  return context;
};

const ModalStackProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(modalStackReducer, { modalStack: [] });

  return (
    <ModalStackContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalStackContext.Provider>
  );
};

export { ModalStackProvider, useModalStack };
