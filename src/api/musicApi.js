import axios from 'axios';

function fetch(request, callback) {
    axios.get(request)
        .then(response => {
            callback(response.data);
        });
}

export const getAlbums = (artist, callback) => {
    const request = `https://api.spotify.com/v1/search?q=${artist}&type=album`;
    fetch(request, callback);
};

export const getTracks = (albumID, callback) => {
    const request = `https://api.spotify.com/v1/albums/${albumID}`;
    fetch(request, callback);
};
