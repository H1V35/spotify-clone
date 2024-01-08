import { Pause, Play } from '@/components/Player';

export function CardPlayButton({ id }) {
  return (
    <button className="card-play-button bg-green-500 rounded-full p-4 shadow-lg hover:scale-105 transition hover:bg-green-400">
      <Play />
    </button>
  );
}
