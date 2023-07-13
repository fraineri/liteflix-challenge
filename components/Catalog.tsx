"use client";

import { movieDbGetMoviePopularTop } from "@/services/movies.service";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import useCatalogSelection, {
  CatalogSelectionProvider,
} from "@/context/catalog-selection.catalog";
import { CATALOG } from "@/common/enum";
import { BsCheck } from "react-icons/bs";

type CatalogProps = {
  children: React.ReactNode;
};
const Catalog: React.FC<CatalogProps> = ({ children }) => {
  // const { data: movies, status } = useQuery({
  //   queryKey: ["movie-popular_prefetched", popularShowAmount],
  //   queryFn: () => movieDbGetMoviePopularTop(popularShowAmount),
  // });


  return (
    <CatalogSelectionProvider>
      <div className="bg-dark-grey pb-1">
        {/* SELECTOR */}
        <CatalogSelector />

        {/* CTALOG LIST */}
        {children}
      </div>
    </CatalogSelectionProvider>
  );
};

type CatalogOption = {
  id: CATALOG;
  text: string;
};
const CatalogSelector = () => {
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

type CatalogSelectorModalProps = {
  isOpen: boolean;
  onClose: any;
  options: CatalogOption[];
};

const CatalogSelectorModal: React.FC<CatalogSelectorModalProps> = ({
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

export default Catalog;
