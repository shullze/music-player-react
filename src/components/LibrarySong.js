import React from 'react';

function LibrarySong({song, songs, setCurrentSong, id}) {

    function songSelectHandler(){
        const selectedSong = songs.filter(
            (song) => song.id === id
        )
        setCurrentSong(selectedSong[0])
    }

    return (
        <div className='library-song' onClick={songSelectHandler}>
            <img
                alt={song.name}
                src={song.cover}
            />
            <div className='song-description'>
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default LibrarySong;