"use client";

import { MODAL_SECTION } from "@/common/enum";
import { useModalStack } from "@/context/modal-stack.context";

type NavMenuButtonProps = {
  children: React.ReactNode;
};

const NavMenuButton: React.FC<NavMenuButtonProps> = ({ children }) => {
  const { state, dispatch } = useModalStack();

  const handleClick = () => {
    const menuModalIsOpen = state.modalStack.includes(MODAL_SECTION.MAIN_MENU);

    if (menuModalIsOpen) {
      setTimeout(() => {
        dispatch({ type: "CLOSE_MODAL", payload: MODAL_SECTION.MAIN_MENU });
      }, 500);
    } else {
      dispatch({ type: "PUSH_MODAL", payload: MODAL_SECTION.MAIN_MENU });
    }
  };

  return (
    <div className="cursor-pointer" onClick={() => handleClick()}>
      {children}
    </div>
  );
};

export default NavMenuButton;
