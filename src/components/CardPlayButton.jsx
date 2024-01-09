import { Pause, Play } from '@/components/Player';
import { usePlayerStore } from '@/store/playerStore';

export function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state);

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

  const handleClick = async () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }

    const res = await fetch(`/api/get-info-playlist.json?id=${id}`);
    const data = await res.json();
    const { songs, playlist } = data;

    setIsPlaying(true);
    setCurrentMusic({ songs, playlist, song: songs[0] });
  };

  return (
    <button
      onClick={handleClick}
      className="card-play-button bg-green-500 rounded-full p-4 shadow-lg hover:scale-105 transition hover:bg-green-400">
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  );
}
