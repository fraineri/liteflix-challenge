"use server";

import { CATALOG_TOP_AMOUNT } from "@/common/constants";
import Catalog from "@/components/Catalog";
import CatalogList from "@/components/CatalogList";
import HomeScreen from "@/components/client/HomeScreen";
import { ReactQueryHydrate } from "@/components/client/Hydrate";
import getQueryClient from "@/lib/utils/getQueryClient";
import {
  movieDbGetMoviePopularTop,
  movieDbGetNowPlayingTop,
} from "@/services/movies.service";
import { dehydrate } from "@tanstack/react-query";

const Home = async () => {
  const queryClient = getQueryClient();

  const movieScreen = (await movieDbGetNowPlayingTop())[0];
  const topMovies = await movieDbGetMoviePopularTop(CATALOG_TOP_AMOUNT);

  await queryClient.prefetchQuery(
    ["movie-popular_prefetched", CATALOG_TOP_AMOUNT],
    () => movieDbGetMoviePopularTop(CATALOG_TOP_AMOUNT)
  );

  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <HomeScreen movieScreen={movieScreen} />
      <Catalog>
        <CatalogList movies={topMovies} />
      </Catalog>
    </ReactQueryHydrate>
  );
};

export default Home;
