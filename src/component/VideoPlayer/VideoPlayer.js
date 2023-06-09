import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = (props) => {
    const { src } = props;

    return (
        <div className="video-wrapper">
            <div className="video-container">
                <iframe 
                    className="video" 
                    src={src} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default VideoPlayer;