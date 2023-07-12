import HomeScreen from "@/components/client/HomeScreen";
import { ReactQueryHydrate } from "@/components/client/Hydrate";
import getQueryClient from "@/lib/utils/getQueryClient";
import { movieDbGetNowPlayingTop } from "@/services/movie-db.service";
import { dehydrate } from "@tanstack/react-query";

const Home = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(
    ["movie-now-playing_prefetched"],
    movieDbGetNowPlayingTop
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <HomeScreen />
    </ReactQueryHydrate>
  );
};

export default Home;
