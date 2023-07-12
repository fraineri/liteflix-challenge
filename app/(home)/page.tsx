import { CATALOG_TOP_AMOUNT } from "@/common/constants";
import Catalog from "@/components/Catalog";
import HomeScreen from "@/components/client/HomeScreen";
import { ReactQueryHydrate } from "@/components/client/Hydrate";
import getQueryClient from "@/lib/utils/getQueryClient";
import { movieDbGetMoviePopularTop, movieDbGetNowPlayingTop } from "@/services/movie-db.service";
import { dehydrate } from "@tanstack/react-query";

const Home = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(
    ["movie-now-playing_prefetched"],
    () => movieDbGetNowPlayingTop()
  );

  await queryClient.prefetchQuery(
    ["movie-popular_prefetched", CATALOG_TOP_AMOUNT],
    () => movieDbGetMoviePopularTop(CATALOG_TOP_AMOUNT)
  )
  
  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <HomeScreen />
      <Catalog popularShowAmount={CATALOG_TOP_AMOUNT}/>
    </ReactQueryHydrate>
  );
};

export default Home;
