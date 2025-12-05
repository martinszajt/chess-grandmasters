"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IPlayerListItem } from "../../../interfaces/player.interface";

interface PlayerListCardProps {
  playerItem: IPlayerListItem;
}

const PlayerListCard: React.FC<PlayerListCardProps> = ({ playerItem }) => {
  if (!playerItem) return null;

  const { username } = playerItem;
  const avatarUrl = `https://robohash.org/${username}.png`;

  return (
    <Link
      href={`/players/${username}`}
      target="_blank"
      className="
        col-12 sm:col-6 md:col-4 lg:col-3 p-2
        bg-gray-800 border border-gray-700
        shadow-2 hover:shadow-lg hover:-translate-y-1
        transition-transform
      "
    >
      <div className="p-4 rounded-xl flex flex-col items-center text-center cursor-pointer">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-gray-700">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={`Avatar of ${username}`}
              width={"64"}
              height={64}
            />
          ) : (
            <span className="text-gray-400">
              {username.charAt(0).toUpperCase()}
            </span>
          )}
        </div>

        <div className="space-y-1">
          <p className="text-lg font-bold text-white">{username}</p>
        </div>
      </div>
    </Link>
  );
};

export default PlayerListCard;
