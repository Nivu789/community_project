"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cn";


type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  cardText:string
};

export const PartTwoTest = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="h-[1410px]">
    <div className="w-full h-full p-10 grid md:grid-cols-3 mx-auto gap-4 lg:grid-cols-1 max-sm:gap-12">
      {cards && cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
          
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden cursor-pointer",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-fit w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <div className="z-10 absolute text-xl mx-4 bg-white w-full my-96 drop-shadow-xl px-2 rounded-l-lg max-sm:mt-[360px]">{card.cardText}</div>
            <ImageComponent card={card}/>
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <>
    
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        `object-cover absolute inset-0 h-full w-full transition duration-200 hover:scale-110 hover:brightness-50`
      )}
      alt="thumbnail"
    />
    </>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className=" h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative bg-white">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0,
        }}
        className="absolute h-full w-full bg-white opacity-1"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
