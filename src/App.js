import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/App.scss"
import data from "./data";
import {useState} from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {

  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [libraryStatus, setLibraryStatus] = useState(false)

  return (
    <div className="App">
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song
        currentSong={currentSong}
      />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
          songs={songs}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
          libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;