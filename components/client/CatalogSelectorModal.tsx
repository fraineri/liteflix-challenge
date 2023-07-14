'use client'

import { CATALOG } from "@/common/enum";
import useCatalogSelection from "@/context/catalog-selection.catalog";
import { CatalogOption } from "@/types/catalog-selection";
import { BsCheck } from "react-icons/bs";

type CatalogSelectorModalProps = {
  isOpen: boolean;
  onClose: any;
  options: CatalogOption[];
};

export const CatalogSelectorModal: React.FC<CatalogSelectorModalProps> = ({
  isOpen,
  onClose,
  options,
}) => {
  const { catalogSelected, setCatalogSelected } = useCatalogSelection();

  const changeCatalog = (catalogId: CATALOG) => {
    setCatalogSelected(catalogId);
    onClose();
  };

  return (
    isOpen && (
      <div>
        {/* OUTSIDE OF THE BOX */}
        <div
          className="fixed bottom-0 left-0 w-full h-full z-50"
          onClick={() => onClose()}
        ></div>
        {/* MODAL CONTENT */}
        <div className="fixed bottom-0 left-0 w-full h-28 bg-dark-grey z-50 flex flex-col justify-around py-5">
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
