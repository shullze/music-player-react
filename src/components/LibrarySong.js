import React from 'react';

function LibrarySong({song, songs, setCurrentSong, id, setSongs}) {

    function songSelectHandler(){
        const selectedSong = songs.filter(
            (song) => song.id === id
        )
        setCurrentSong(selectedSong[0])

        const changeSongActiveStatus = songs.map(
         song => {
             if(song.id === id){
                 return{
                     ...song,
                     active: true,
                 };
             }else {
                 return {
                     ...song,
                     active: false,
                 };
             }
         }
        )
        setSongs(changeSongActiveStatus)
    }

    return (
        <div className={`library-song ${song.active ? 'selected' : ''}`} onClick={songSelectHandler}>
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