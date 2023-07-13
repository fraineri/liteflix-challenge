import { CATALOG } from "@/common/enum";

export type CatalogSelectionState = {
  catalogSelected: CATALOG;
  setCatalogSelected(catalog: CATALOG): void;
};
