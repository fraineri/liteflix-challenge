"use client";

import { CATALOG } from "@/common/enum";
import { CatalogSelectionState } from "@/types/catalog-selection";
import { PropsWithChildren, createContext, useContext, useState } from "react";

const CatalogSelectionContext = createContext<CatalogSelectionState | null>(
  null
);

const useCatalogSelection = (): CatalogSelectionState => {
  const context = useContext(CatalogSelectionContext);

  if (!context) {
    throw new Error("CatalogSelectionProvider not found as parent.");
  }

  return context;
};

export const CatalogSelectionProvider = (props: PropsWithChildren) => {
  const [catalogSelected, setCatalogSelected] = useState<CATALOG>(
    CATALOG.POPULAR
  );
  return (
    <CatalogSelectionContext.Provider
      value={{ catalogSelected, setCatalogSelected }}
    >
      {props.children}
    </CatalogSelectionContext.Provider>
  );
};

export default useCatalogSelection;
