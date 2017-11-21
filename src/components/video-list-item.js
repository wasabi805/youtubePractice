
import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { // <----see notes from video-list.js to see how
                                                    // we're able to pass onVideoSelect as a prop
    // const video = props.video;
    // const onVideoSelect = props.onVideoSelect;

    // ES6 syntax: passing in {video and onVideoSelect} as an args eliminates the need to
    // define 'const video = props.video' and const onVideoSelect = props.onVideoSelect within the class.
    console.log(video)

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item"> {/*see notes for line 4 for explanation as..*/}
                                                                                {/*how we're able to use onVideoSelect(video) */}
            <div className="video-list media">                                  {/*when we run the onClick function */}

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