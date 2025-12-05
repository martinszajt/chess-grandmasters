export type IPlayerListItem = {
  username: string;
};

export interface IPlayerDetails {
  "@id": string;
  followers: number;
  is_streamer: boolean;
  joined: number; // timestamp in seconds
  last_online: number; // timestamp in seconds
  league: string;
  player_id: number;
  status: string;
  streaming_platforms: string[]; // array of strings
  title: string;
  url: string;
  username: string;
  verified: boolean;
}
