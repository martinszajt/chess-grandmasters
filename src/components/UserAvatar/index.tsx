"use client";

import React from "react";
import Image from "next/image";
import buildRoute from "../../utils/routeBuilder";
import {
  ROBOHASH_API_BASE_URL,
  ROBOHASH_API_ENDPOINTS,
} from "../../config/routes";

interface UserAvatarProps {
  username: string;
  size?: "small" | "large";
}

const sizeMap = {
  small: 64,
  large: 128,
};

const UserAvatar = ({ username, size = "small" }: UserAvatarProps) => {
  const pictureUrl = buildRoute(
    `${ROBOHASH_API_BASE_URL}/${ROBOHASH_API_ENDPOINTS.PLAYER_AVATAR}`,
    { username },
  );

  const avatarSize = sizeMap[size];
  const containerSize = sizeMap[size] / 4;

  return (
    <div className="p-4 rounded-xl flex flex-col items-center text-center cursor-pointer overflow-hidden">
      <div
        className={`w-${containerSize} h-${containerSize} rounded-full flex items-center justify-center mb-3 bg-gray-700 overflow-hidden`}
      >
        <Image
          src={pictureUrl}
          alt={`Avatar of ${username}`}
          width={avatarSize}
          height={avatarSize}
        />
      </div>
    </div>
  );
};

export default UserAvatar;
