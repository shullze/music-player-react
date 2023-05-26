import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons";

function Nav({libraryStatus, setLibraryStatus}) {

    function libraryStatusHandler(){
        setLibraryStatus(!libraryStatus)
    }

    return (
        <nav>
            <h1>Ripple</h1>
            <button onClick={libraryStatusHandler}>
                Library
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    );
}

export default Nav;