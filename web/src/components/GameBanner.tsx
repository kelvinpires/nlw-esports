import React from "react";

interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
  id: string;
}

export const GameBanner = ({
  bannerUrl,
  title,
  adsCount,
  id,
}: GameBannerProps) => {
  return (
    <a
      href={`/game/${id}`}
      className="relative rounded-lg overflow-hidden w-[180px] h-60 flex-none"
    >
      <img src={bannerUrl} alt={title} />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {adsCount} Anúncio(s)
        </span>
      </div>
    </a>
  );
};
