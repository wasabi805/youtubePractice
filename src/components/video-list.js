
import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) =>{
        return <VideoListItem
            onVideoSelect = {props.onVideoSelect} // remember that onVideoSelect is passed props
                                                // located in the render() from index.js
                                                // --> prop FROM App gets passed TO video-list-item
                                                // FROM HERE: see video-list-item:
                                                // video-list-item will now have access to prop onVideoSelect.
                                                // We can then pass onVideoSelect into const VideoListItem
            key={video.etag}
            video={video}/>
        }
    );

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;