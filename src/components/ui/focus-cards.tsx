"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { deleteUserByClerkId, setRole } from "@/db/actions.db";
import { auth } from "@clerk/nextjs/server";
import { useClerk, useUser } from "@clerk/nextjs";
import { UserRoundSearch } from "lucide-react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    userId,
    setrole,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    userId: string;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    setrole: (userId: string, role: string) => void;
  }) => {
    return (
      <div
        onClick={() => {
          setrole(userId, card.title);
        }}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg cursor-pointer relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute inset-0"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50  to-neutral-200">
            {card.title}
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({
  cards,
  setrole,
}: {
  cards: Card[];
  setrole: (userId: string, role: string) => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const { user } = useUser();

  return (
    <div className="flex  gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          userId={user?.id!}
          setrole={setrole}
        />
      ))}
    </div>
  );
}
