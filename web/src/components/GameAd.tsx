import axios from "axios";
import * as Dialog from "@radix-ui/react-dialog";

import { GameController } from "phosphor-react";
import { Ads } from "../pages/Game";

interface GameAdProps {
  ad: Ads;
  setDiscord: (discord: string) => void;
}

export const GameAd = ({ ad, setDiscord }: GameAdProps) => {
  function getDiscord() {
    try {
      axios
        .get(`http://localhost:3333/ads/${ad.id}/discord`)
        .then((response) => setDiscord(response.data.discord));
    } catch (err) {
      alert("Tente novamente.");
    }
  }

  return (
    <div className="bg-[#2A2634] rounded p-5 flex flex-col gap-4">
      <div>
        <span className="text-[#c4c4c6] text-sm block">Nome</span>
        <strong className="text-white font-bold text-sm">{ad.name}</strong>
      </div>
      <div>
        <span className="text-[#c4c4c6] text-sm block">Tempo de jogo</span>
        <strong className="text-white font-bold text-sm">
          {ad.yearsPlaying} ano(s)
        </strong>
      </div>
      <div className="w-[180px]">
        <span className="text-[#c4c4c6] text-sm block">Disponibilidade</span>
        <strong className="text-white font-bold text-sm">
          {ad.weekDays.length} dias <span className="text-[#c4c4c6]">•</span>{" "}
          {ad.hourStart} - {ad.hourEnd}
        </strong>
      </div>
      <div>
        <span className="text-[#c4c4c6] text-sm block">Chamada de áudio?</span>
        <strong
          className={`${
            ad.useVoiceChannel ? "text-emerald-400" : "text-red-500"
          } font-bold text-sm`}
        >
          {ad.useVoiceChannel ? "Sim" : "Não"}
        </strong>
      </div>

      <Dialog.Trigger
        onClick={getDiscord}
        className="bg-[#8B5CF6] font-semibold text-white w-[140px] h-10 flex items-center justify-center gap-2 rounded"
      >
        <GameController className="w-6 h-6" />
        Conectar
      </Dialog.Trigger>
    </div>
  );
};
