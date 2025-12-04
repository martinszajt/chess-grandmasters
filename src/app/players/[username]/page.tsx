import PlayerView from "../../../views/player";

type Props = {
  params: {
    username: string;
  };
};

export default function PlayerPage({ params }: Props) {
  const { username } = params;

  return <PlayerView username={username} />;
}
