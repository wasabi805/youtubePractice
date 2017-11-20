// Section 2 Lesson 03: ##### PROPS - ALSO REVIEW on RENDERING CHILD COMPONENTS  #####

import React from 'react';

const VideoList = (props) => {
    return (
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
    );
};

export default VideoList;