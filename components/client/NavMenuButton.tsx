"use client";

import { MODAL_SECTION } from "@/common/enum";
import { useModalStack } from "@/context/modal-stack.context";

type ModalOpenButtonProps = {
  children: React.ReactNode;
  modalSection: MODAL_SECTION;
};
const ModalOpenButton: React.FC<ModalOpenButtonProps> = ({
  children,
  modalSection,
}) => {
  const { state, dispatch } = useModalStack();

  const handleClick = () => {
    const menuModalIsOpen = state.modalStack.includes(modalSection);

    if (menuModalIsOpen) {
      setTimeout(() => {
        dispatch({ type: "CLOSE_MODAL", payload: { section: modalSection } });
      }, 500);
    } else {
      dispatch({ type: "PUSH_MODAL", payload: { section: modalSection } });
    }
  };

  return (
    <div className="cursor-pointer" onClick={() => handleClick()}>
      {children}
    </div>
  );
};

export default ModalOpenButton;
