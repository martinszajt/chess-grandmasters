type Props = {
  params: {
    player_id: string;
  };
};

export default function PlayerPage({ params }: Props) {
  const { player_id } = params;

  return <div>{player_id}</div>;
}
