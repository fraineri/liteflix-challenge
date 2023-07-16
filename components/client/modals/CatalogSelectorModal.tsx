"use client";

import { CATALOG, MODAL_SECTION } from "@/common/enum";
import useCatalogSelection from "@/context/catalog-selection.catalog";
import { useModalStack } from "@/context/modal-stack.context";
import { CatalogOption } from "@/types/catalog-selection";
import { useCallback, useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";

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
      dispatch({ type: "CLOSE_MODAL", payload: MODAL_SECTION.SELECT_CATALOG });
    }, 200);
  }, []);

  return (
    isVisible && (
      <div>
        {/* OUTSIDE OF THE BOX */}
        <div
          className="fixed bottom-0 left-0 w-full h-full z-50"
          onClick={handleCloseModal}
        ></div>
        {/* MODAL CONTENT */}
        <div
          className={`fixed bottom-0 left-0 w-full h-28 bg-dark-grey z-50 flex flex-col justify-around py-5 ${
            isMenuOpen
              ? "animate-side-in-from-bottom"
              : "animate-side-out-to-bottom"
          }`}
        >
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
