import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/App.scss"
import data from "./data";
import {useState} from "react";
import Library from "./components/Library";

function App() {

  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
      <Song
        currentSong={currentSong}
      />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs}/>
    </div>
  );
}

export default App;