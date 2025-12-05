import PlayerView from "../../../views/player";

export async function generateMetadata({ params }: Props) {
  return {
    title: `Player Profile - ${params.username}`,
  };
}

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
