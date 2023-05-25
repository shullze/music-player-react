import React from 'react';
import LibrarySong from "./LibrarySong";

function Library({songs, setCurrentSong}) {
    return (
        <div className='library'>
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
                        />
                    )
                )}
            </div>

        </div>
    );
}

export default Library;