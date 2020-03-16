import React from 'react';

const ListVideo = ({ video }) => {
    return (
        <div className="item-container">
            <iframe
                title="VevoTrailer"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default ListVideo;