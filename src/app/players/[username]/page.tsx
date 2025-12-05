import PlayerView from "../../../views/player";

type Props = {
  params: {
    username: string;
  };
};

export const PlayerPage = ({ params }: Props) => {
  const { username } = params;

  return <PlayerView username={username} />;
};

export default PlayerPage;
