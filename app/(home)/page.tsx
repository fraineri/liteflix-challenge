"use server";

import { CATALOG_TOP_AMOUNT } from "@/common/constants";
import Catalog from "@/components/Catalog";
import HomeScreen from "@/components/client/HomeScreen";
import { ReactQueryHydrate } from "@/components/client/Hydrate";
import getQueryClient from "@/lib/utils/getQueryClient";
import { movieDbGetNowPlayingTop } from "@/services/movies.service";
import { dehydrate } from "@tanstack/react-query";

const Home = async () => {
  const queryClient = getQueryClient();

  const movieScreen = (await movieDbGetNowPlayingTop())[0];

  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <HomeScreen movieScreen={movieScreen} />
      <Catalog />
    </ReactQueryHydrate>
  );
};

export default Home;
