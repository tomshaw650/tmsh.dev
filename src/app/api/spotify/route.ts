import { NextResponse } from "next/server";
import { getNowPlaying } from "./getNowPlaying";

export async function GET(request: Request) {
  request.url;
  const response = await getNowPlaying();

  if (
    response.status === 204 ||
    response.status > 400 ||
    response.data.currently_playing_type !== "track"
  ) {
    return NextResponse.json({ data: { isPlaying: false } });
  }

  const data = {
    isPlaying: response.data.is_playing,
    title: response.data.item.name,
    album: response.data.item.album.name,
    artist: response.data.item.album.artists
      .map((artist) => artist.name)
      .join(", "),
    albumImageUrl: response.data.item.album.images[0].url,
    songUrl: response.data.item.external_urls.spotify,
  };

  return NextResponse.json({ data });
}
