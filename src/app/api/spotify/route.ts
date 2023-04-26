import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import querystring from "querystring";

const {
  CLIENT_ID: client_id,
  CLIENT_SECRET: client_secret,
  REFRESH_TOKEN: refresh_token,
} = process.env;

const token = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

interface SpotifyData {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: Array<{ name: string }>;
      images: [{ url: string }];
    };
    external_urls: {
      spotify: string;
    };
  };
  currently_playing_type: string;
}

const getAccessToken = async () => {
  const res = await axios.post<{ access_token: string }>(
    TOKEN_ENDPOINT,
    querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
    {
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return res.data.access_token;
};

export const getNowPlaying = async () => {
  const access_token = await getAccessToken();

  return axios.get<SpotifyData>(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export async function GET(req: NextApiRequest) {
  const response = await getNowPlaying();

  if (
    response.status === 204 ||
    response.status > 400 ||
    response.data.currently_playing_type !== "track"
  ) {
    return NextResponse.json({ isPlaying: false });
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