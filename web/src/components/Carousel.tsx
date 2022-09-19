import { CaretLeft, CaretRight } from "phosphor-react";
import React, { PropsWithChildren, useRef } from "react";

export const Carousel = ({ children }: PropsWithChildren) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  function handleCarouselScroll(side: string) {
    const scroll = carouselRef.current!.offsetWidth;

    if (side == "left") {
      carouselRef.current!.scrollLeft =
        carouselRef.current!.scrollLeft - scroll;
    }
    if (side == "right") {
      carouselRef.current!.scrollLeft =
        carouselRef.current!.scrollLeft + scroll;
    }
  }
  return (
    <div className="mx-auto max-w-[1344px] flex gap-6">
      <div className=" text-zinc-400  flex items-center ">
        <CaretLeft
          onClick={() => handleCarouselScroll("left")}
          className="w-12 h-12  cursor-pointer"
        />
      </div>
      <div
        ref={carouselRef}
        className={`flex gap-6 scroll-smooth overflow-x-hidden `}
      >
        {children}
      </div>
      <div className="text-zinc-400  flex items-center">
        <CaretRight
          onClick={() => handleCarouselScroll("right")}
          className="w-12 h-12 cursor-pointer"
        />
      </div>
    </div>
  );
};
