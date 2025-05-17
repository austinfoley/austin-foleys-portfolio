// @ts-ignore
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function MusicPlayer() {
  return (
    <AudioPlayer
      src="/music/Stax Menu Theme 1.23.24.m4a"
      autoPlay
      loop
    />
  );
}
