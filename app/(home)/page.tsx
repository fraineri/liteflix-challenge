"use server";

import Catalog from "@/components/server/Catalog";
import Nav from "@/components/server/Nav";
import HomeScreen from "@/components/client/HomeScreen";
import { ReactQueryHydrate } from "@/components/client/Hydrate";
import { ModalStackProvider } from "@/context/modal-stack.context";
import getQueryClient from "@/lib/utils/getQueryClient";
import { movieDbGetNowPlayingTop } from "@/services/movies.service";
import { dehydrate } from "@tanstack/react-query";

const Home = async () => {
  const queryClient = getQueryClient();
  const movieScreen = (await movieDbGetNowPlayingTop())[0];
  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <ModalStackProvider>
        <Nav />
        <HomeScreen movieScreen={movieScreen} />
        <div className="lg:absolute lg:right-[100px] lg:top-[148px] lg:h-md:top-[100px] lg:w-5/6 lg:h-4/5 lg:left-[50%] lg:transform lg:-translate-x-1/2 lg:flex lg:flex-col lg:justify-center lg:items-end">
          <Catalog />
        </div>
      </ModalStackProvider>
    </ReactQueryHydrate>
  );
};

export default Home;
