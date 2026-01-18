'use client';

import styles from '@/styles/game.module.css';
import { GAMES } from '@/lib/gameConfig';
import Link from 'next/link';
import '@/styles/globals.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.questionBox}>
        <h1 className={styles.questionText} style={{ fontSize: '3rem', marginBottom: '1rem' }}>Pilih Menu Masak</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>
          {GAMES.map((game) => (
            <Link
              key={game.id}
              href={`/game/${game.id}`}
              className={styles.restartBtn}
              style={{ width: '80%', maxWidth: '400px', padding: '20px', textDecoration: 'none', display: 'block' }}
            >
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{game.name}</div>
              <div style={{ fontSize: '1rem', opacity: 0.9 }}>{game.description}</div>
            </Link>
          ))}
        </div>
      </div>
      {/* Floor */}
      <div className={styles.floor}></div>
    </div>
  );
}
