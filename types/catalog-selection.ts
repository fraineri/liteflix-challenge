import { CATALOG } from "@/common/enum";

export type CatalogSelectionState = {
  catalogSelected: CATALOG;
  setCatalogSelected(catalog: CATALOG): void;
};

export type CatalogOption = {
  id: CATALOG;
  text: string;
};