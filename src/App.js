import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/App.scss"
import data from "./data";
import {useState} from "react";

function App() {

  const [song, setSong] = useState(data())
  const [currentSong, setCurrentSong] = useState(song[0])
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
    </div>
  );
}

export default App;