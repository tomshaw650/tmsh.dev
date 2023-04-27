"use client";

import { useQuery } from "@tanstack/react-query";

import { SiSpotify } from "react-icons/si";

async function getSong() {
  const res = await fetch("/api/spotify");
  const song = await res.json();
  return song;
}

export default function DisplaySong() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["spotify"],
    queryFn: () => getSong(),
  });

  if (isLoading) {
    return <div className="h-24">spotify loading...</div>;
  }

  if (error) {
    return <div className="h-24">error showing song</div>;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferer"
      href={
        data.data.isPlaying
          ? data.data.songUrl
          : "https://open.spotify.com/user/tomwar99"
      }
      className="relative flex w-72 items-center space-x-4 rounded-md border p-5 transition-shadow hover:shadow-md"
    >
      <div className="w-16">
        {data.data.isPlaying ? (
          <img
            className="w-16 shadow-sm"
            src={data.data.albumImageUrl}
            alt={data.data.album}
          />
        ) : (
          <SiSpotify size={64} color={"#FDD641"} />
        )}
      </div>

      <div className="flex-1">
        <p className="text-xs">
          {data.data.isPlaying ? "currently listening to..." : ""}
        </p>
        <p className="font-bold">
          {data.data.isPlaying ? data.data.title : "Not Listening"}
        </p>
        <p className="font-dark text-xs">
          {data.data.isPlaying ? data.data.artist : "Spotify"}
        </p>
      </div>
      <div className="absolute bottom-1.5 right-1.5">
        <SiSpotify size={20} color={"#FDD641"} />
      </div>
    </a>
  );
}
