import React from 'react';

const Album = (props) => {
    const name = props.album.name;
    const url = props.album.images[1].url;
    const albumID = props.album.id;
    return (
        <li>
            <img
                src={url}
                alt={name}
                style={Album.styles.img}
                onClick={() => props.getTracks(albumID)}
                />
        </li>
    );
};

Album.propTypes = {
    album: React.PropTypes.object.isRequired,
    getTracks: React.PropTypes.func.isRequired,
};

Album.styles = {
    img: {
        marginBottom: '1em',
    },
};

export default Album;
