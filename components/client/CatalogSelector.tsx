"use client";

import { CATALOG, MODAL_SECTION } from "@/common/enum";
import useCatalogSelection from "@/context/catalog-selection.catalog";
import { CatalogOption } from "@/types/catalog-selection";
import { IoIosArrowDown } from "react-icons/io";
import { CatalogSelectorModal } from "./modals/CatalogSelectorModal";
import { useModalStack } from "@/context/modal-stack.context";

export const CatalogSelector = () => {
  const catalogOptionsList: CatalogOption[] = [
    {
      id: CATALOG.POPULAR,
      text: "Populares",
    },
    {
      id: CATALOG.PERSONAL,
      text: "Mis peliculas",
    },
  ];

  const { state, dispatch } = useModalStack();
  const { catalogSelected } = useCatalogSelection();

  const handleModalOpen = () => {
    const selectorAlreadyOpen = state.modalStack.includes(
      MODAL_SECTION.SELECT_CATALOG
    );
    if (!selectorAlreadyOpen) {
      dispatch({
        type: "PUSH_MODAL",
        payload: { section: MODAL_SECTION.SELECT_CATALOG },
      });
    }
  };

  return (
    <div>
      <div
        className="relative font-bebas-neue uppercase tracking-widest text-[18px] text-center text-white mb-5 cursor-pointer"
        onClick={() => handleModalOpen()}
      >
        <span>VER:</span>{" "}
        <span className="font-[700] ml-2">
          {
            catalogOptionsList.find((option) => option.id === catalogSelected)
              ?.text
          }
        </span>
        <IoIosArrowDown size={20} className="inline" />
        <CatalogSelectorModal options={catalogOptionsList} />
      </div>
    </div>
  );
};
