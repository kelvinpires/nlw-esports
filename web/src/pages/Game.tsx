import axios from "axios";
import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { useParams } from "react-router-dom";
import { Carousel } from "../components/Carousel";
import { GameAd } from "../components/GameAd";
import { GetDiscord } from "../components/GetDiscord";

export interface Ads {
  id: string;
  name: string;
  weekDays: string[];
  useVoiceChannel: boolean;
  yearsPlaying: number;
  hourEnd: string;
  hourStart: string;
}

export interface GameI {
  id: string;
  title: string;
  bannerUrl: string;
  ads: Ads[];
}

export const Game = () => {
  const [game, setGame] = useState<GameI>();
  const [discord, setDiscord] = useState<string>("");
  const { id } = useParams();

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:3333/games/${id}/ads`)
        .then((response) => setGame(response.data));
    } catch (err) {
      alert("Algo deu errado. Retorne e tente novamente.");
    }
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <div>
        <img src={game?.bannerUrl} alt={game?.title} className="rounded" />

        <div className="mt-6">
          <h1 className="text-transparent bg-nlw-gradient bg-clip-text text-3xl font-black">
            {game?.title}
          </h1>
          <p className="text-zinc-400 text-lg">Conecte-se e comece a jogar!</p>
        </div>
      </div>

      <Dialog.Root>
        <div className="mt-5">
          {game!?.ads.length > 1 && (
            <Carousel>
              {game?.ads.map((ad) => {
                return <GameAd ad={ad} setDiscord={setDiscord} key={ad.id} />;
              })}
            </Carousel>
          )}
        </div>
        <GetDiscord discord={discord} />
      </Dialog.Root>
    </div>
  );
};
