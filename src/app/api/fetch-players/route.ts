import { IPlayerListItem } from "../../../interfaces/player.interface";

export const dynamic = "force-static";

export async function GET() {
  try {
    console.log("try");
    const res = await fetch("https://api.chess.com/pub/titled/GM", {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    });

    if (!res.ok) {
      return Response.json(
        { error: "Failed to fetch player data" },
        { status: res.status },
      );
    }

    const data: { players?: string[] } = await res.json();

    let players: IPlayerListItem[] = [];

    if (Array.isArray(data.players)) {
      players = data.players.map((id: string) => ({
        id,
      }));
    }

    console.log("players", players);

    return Response.json(players);
  } catch (error) {
    return Response.json(
      { error: "Unexpected server error", details: `${error}` },
      { status: 500 },
    );
  }
}
