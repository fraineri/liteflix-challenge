"use client";

import { CATALOG, MODAL_SECTION } from "@/common/enum";
import useCatalogSelection from "@/context/catalog-selection.catalog";
import { useModalStack } from "@/context/modal-stack.context";
import { CatalogOption } from "@/types/catalog-selection";
import { useCallback, useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { GoTriangleUp } from "react-icons/go";

type CatalogSelectorModalProps = {
  options: CatalogOption[];
};

export const CatalogSelectorModal: React.FC<CatalogSelectorModalProps> = ({
  options,
}) => {
  const { catalogSelected, setCatalogSelected } = useCatalogSelection();
  const { state, dispatch } = useModalStack();
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log("MODAL STACK", state.modalStack)
    const isModalOpen = state.modalStack.includes(MODAL_SECTION.SELECT_CATALOG);
    setIsVisible(isModalOpen);
    setIsMenuOpen(isModalOpen);
  }, [state]);

  const changeCatalog = useCallback((catalogId: CATALOG) => {
    setCatalogSelected(catalogId);
    handleCloseModal();
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsMenuOpen(false);
    setTimeout(() => {
      dispatch({
        type: "CLOSE_MODAL",
        payload: { section: MODAL_SECTION.SELECT_CATALOG },
      });
    }, 500);
  }, []);

  console.log("IS MENU OPEN", isMenuOpen);
  return (
    isVisible && (
      <div>
        {/* MODAL CONTENT */}
        <div
          className={`fixed bottom-0 left-0 w-full h-28 bg-dark-grey z-40 flex flex-col justify-around py-5  ${
            isMenuOpen
              ? "animate-side-in-from-bottom lg:animate-fade-in"
              : "animate-side-out-to-bottom lg:animate-fade-out"
          }  lg:absolute lg:top-[35px] lg:left-auto lg:right-0 lg:w-[241px]`}
        >
          <div className="invisible absolute lg:visible -top-5 right-5">
            <GoTriangleUp size={40} className="text-dark-grey" />
          </div>
          {options.map((option) => {
            return (
              <div
                key={option.id}
                onClick={() => changeCatalog(option.id)}
                className={`flex flex-row justify-between items-center px-6 text-white cursor-pointer ${
                  option.id === catalogSelected ? "font-[700]" : "font-[400]"
                }`}
              >
                <span className="font-bebas-neue uppercase tracking-widest text-[18px]">
                  {option.text}
                </span>
                {option.id === catalogSelected && <BsCheck size={24} />}
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};
