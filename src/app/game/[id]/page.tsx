import GameContainer from '@/components/GameContainer';
import { GAMES } from '@/lib/gameConfig';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return GAMES.map((game) => ({
        id: game.id,
    }));
}

export default async function GamePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const game = GAMES.find((g) => g.id === id);

    if (!game) {
        notFound();
    }

    return (
        <main>
            <GameContainer gameId={id} />
        </main>
    );
}
