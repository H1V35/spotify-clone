import { Pause, Play } from '@/components/Player';
import { usePlayerStore } from '@/store/playerStore';

export function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state);

  const handleClick = () => {
    setCurrentMusic({
      playlist: {
        id
      }
    });

    setIsPlaying(!isPlaying);
  };

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

  return (
    <button
      onClick={handleClick}
      className="card-play-button bg-green-500 rounded-full p-4 shadow-lg hover:scale-105 transition hover:bg-green-400">
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  );
}
