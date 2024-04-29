import dynamic from "next/dynamic";
import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/query-core";

const DisplaySong = dynamic(() => import("./now-playing"), {
  ssr: false,
});

import { Footer } from "@/components/footer";

async function getSong() {
  const res = await fetch("/api/spotify");
  const song = await res.json();
  return song;
}

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["spotify"], getSong);
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <h1 className="text-6xl font-bold">hi👋, i&apos;m tom!</h1>
      <h2 className="opacity-80 mb-5 text-lg">
        front end developer @<span className="text-[#008670]"> DWP</span>
      </h2>
      <div className="mb-7">
        <Hydrate state={dehydratedState}>
          <DisplaySong />
        </Hydrate>
      </div>
      <div className="max-w-md gap-y-5 flex flex-col text-xl">
        <p>
          I&apos;m a 24 y/o programmer from North East England. I graduated with
          a First Class Honours in Computer Science from Northumbria University.
          I'm a Front End Developer at DWP.
        </p>
        <p>
          Within this portfolio, you can read more about me, look at some of my
          projects, and find some links to get in contact.
        </p>
        <p className="text-[#FDD641]">enjoy your stay!</p>
      </div>
      <Footer />
    </>
  );
}
