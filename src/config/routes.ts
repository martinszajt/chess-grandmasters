export const MEXT_API_BASE_URL = "/api/";

export enum NEXT_API_ENDPOINTS {
  FETCH_PLAYERS = "players",
  GET_PLAYER_DETAILS = "players/:username", // Append /:username for details
}

export const CHESS_API_BASE_URL = "https://api.chess.com/pub/";

export enum CHESS_API_ENDPOINTS {
  TITLED_GRANDMASTERS_LIST = "titled/GM",
  PLAYER_DETAILS = "player/:username",
}

export const ROBOHASH_API_BASE_URL = "https://robohash.org/";

export enum ROBOHASH_API_ENDPOINTS {
  PLAYER_AVATAR = ":username.png",
}
