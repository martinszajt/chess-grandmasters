import PlayerView from "../../../views/player";

export const generateMetadata = async ({ params }: Props) => {
  return {
    title: `Player Profile - ${params.username}`,
  };
};

type Props = {
  params: {
    username: string;
  };
};

export default function Page({ params }: Props) {
  const { username } = params;

  return <PlayerView username={username} />;
}
