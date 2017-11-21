
import React from 'react';

const VideoListItem = ({video}) => {
    // const video = props.video;
    // ES6 syntax: passing in {video} as an arg eliminates the need to
    // define 'const video = props.video' within the class.
    console.log(video)

    const imageUrl = video.snippet.thumbnails.default.url;

    return (<li className="list-group-item">
            {/*Bootstrap classes*/}
            <div className="video-list media">

                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">

                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>

            </div>
        </li>
    );
};

export default VideoListItem;