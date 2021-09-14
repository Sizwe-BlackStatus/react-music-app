import React from 'react';
import {PlaylistToggleBox, PlaylistToggle} from "./SearchPlaylistButton.js"

function SearchPlaylistButton({playlistToggle}) {
    return (
        <PlaylistToggleBox onClick={playlistToggle}>
          <PlaylistToggle />
        </PlaylistToggleBox>
    );
}

export default SearchPlaylistButton;