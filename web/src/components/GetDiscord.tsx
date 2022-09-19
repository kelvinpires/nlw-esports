import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircle, X } from "phosphor-react";

interface DiscordProp {
  discord: string;
}

export const GetDiscord = ({ discord }: DiscordProp) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed">
        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25 flex flex-col items-center gap-6">
          <CheckCircle className="w-16 h-16 text-emerald-400" />

          <Dialog.Close className="absolute right-4 top-4 text-zinc-400  cursor-pointer">
            <X className="w-5 h-5" />
          </Dialog.Close>
          <div className="text-center">
            <Dialog.Title className="text-3xl font-black">
              Let's Play
            </Dialog.Title>
            <span className="text-zinc-400">Agora é só começar a jogar!</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold ">
              Adicione no Discord
            </span>
            <div className="bg-zinc-900 px-10 py-2 text-white w-full rounded text-center">
              {discord}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
};
