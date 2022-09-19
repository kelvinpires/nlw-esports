import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GameBanner } from "../components/GameBanner";

import logoImg from "../assets/logo-nlw-esports.svg";
import "../styles/main.css";
import { CreateAdBanner } from "../components/CreateAdBanner";
import { CreateAdModal } from "../components/Form/CreateAdModal";
import axios from "axios";
import { Carousel } from "../components/Carousel";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export const Home = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20 overflow-hidden">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="mt-16">
        <Carousel>
          {games.map((game) => (
            <GameBanner
              bannerUrl={game.bannerUrl}
              title={game.title}
              id={game.id}
              adsCount={game._count.ads}
              key={game.id}
            />
          ))}
        </Carousel>
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
};
