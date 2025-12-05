export type IPlayerListItem = {
  username: string;
};

export interface IPlayerDetails {
  "@id": string;
  followers: number;
  is_streamer: boolean;
  joined: number;
  last_online: number;
  league: string;
  player_id: number;
  status: string;
  streaming_platforms: string[];
  title: string;
  url: string;
  username: string;
  verified: boolean;
}
