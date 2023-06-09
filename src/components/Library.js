import React from 'react';
import LibrarySong from "./LibrarySong";

function Library({songs, setCurrentSong, setSongs, libraryStatus}) {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className='library-songs'>
                {songs.map(
                    song => (
                        <LibrarySong
                            key={song.id}
                            song={song}
                            id={song.id}
                            setCurrentSong={setCurrentSong}
                            songs={songs}
                            setSongs={setSongs}
                        />
                    )
                )}
            </div>

        </div>
    );
}

export default Library;