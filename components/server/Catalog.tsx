"use server";

import useCatalogSelection, {
  CatalogSelectionProvider,
} from "@/context/catalog-selection.catalog";
import { CatalogSelector } from "../client/CatalogSelector";
import {
  GetPersonalMovies,
  movieDbGetMoviePopularTop,
} from "@/services/movies.service";
import { CATALOG_TOP_AMOUNT } from "@/common/constants";
import CatalogList from "../client/CatalogList";
import { getAuthSession } from "@/lib/authOptions";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import getQueryClient from "@/lib/utils/getQueryClient";
import { CATALOG } from "@/common/enum";

type CatalogProps = {};
const Catalog: React.FC<CatalogProps> = async () => {
  const queryClient = getQueryClient();

  const userSession: Session | null = await getAuthSession();
  if (!userSession?.user?.id) {
    redirect("/sign-in");
  }


  const topMoviesPromise = movieDbGetMoviePopularTop(CATALOG_TOP_AMOUNT);
  const personalMoviesPromise = GetPersonalMovies(userSession.user.username!);
  const [topMovies, personalMovies] = await Promise.all([
    topMoviesPromise,
    personalMoviesPromise,
  ]);


  const initialCatalogData = [
    {
      catalog: CATALOG.POPULAR,
      movies: topMovies,
    },
    {
      catalog: CATALOG.PERSONAL,
      movies: personalMovies,
    },
  ];

  return (
    <div>
      <CatalogSelectionProvider>
        <CatalogSelector />
        <CatalogList initialData={initialCatalogData} />
      </CatalogSelectionProvider>
    </div>
  );
};

export default Catalog;
