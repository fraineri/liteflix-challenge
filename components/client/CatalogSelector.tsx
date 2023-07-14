'use client'

import { CATALOG } from "@/common/enum";
import useCatalogSelection from "@/context/catalog-selection.catalog";
import { CatalogOption } from "@/types/catalog-selection";
import { useCallback, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CatalogSelectorModal } from "./CatalogSelectorModal";

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
  
    const { catalogSelected } = useCatalogSelection();
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const changeModalVisibility = useCallback(() => {
      setIsModalOpen(!isModalOpen);
    }, [isModalOpen]);
  
    return (
      <div>
        <div
          className="font-bebas-neue uppercase tracking-widest text-[18px] text-center text-white mb-5 cursor-pointer"
          onClick={changeModalVisibility}
        >
          <span>VER:</span>{" "}
          <span className="font-[700] ml-2">
            {
              catalogOptionsList.find((option) => option.id === catalogSelected)
                ?.text
            }
          </span>
          <IoIosArrowDown size={20} className="inline" />
        </div>
        <CatalogSelectorModal
          isOpen={isModalOpen}
          onClose={changeModalVisibility}
          options={catalogOptionsList}
        />
      </div>
    );
  };