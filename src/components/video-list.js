// Section 2 Lesson 03: ##### PROPS - ALSO REVIEW on RENDERING CHILD COMPONENTS  #####
// recognition to Stephen Grider: https://www.udemy.com/react-redux/learn/v4/t/lecture/4288072?start=0
//
// ###########             THE FOCUS                   ###########
//
//  We'll on the list.js and list-items.js Components and their functionality
//
//      -This component doesn't really have a need for state:
//          - it doesn't record any user interaction.
//          - it doesn't re-render itself.
//      THEREFORE, we'll make list.js a functional component.
//
//      ALSO, make sure to import bootstrap for this exercise.
//      see: https://react-bootstrap.github.io/getting-started.html
//          read sections install, stylesheets, and ES6.
//
// ###########     PROCESS to CREATE COMPONENT AND RENDER IT  ###########
//
//          For this exercise, we'll examine index.js.
//              -we'll return a list because it will be a list of videos:
//
//          1.) import react and create a func class.
//
//              ******     list.js      *****
//
//              import React from 'react';
//
//              const Videolist = () => {
//                  return(
//                       <ul>
//
//                      </ul>
//                  )
//              }
//
//          2.) add a class inside the <ul>
//                  -remember to use className instead of class as you would in html.
//
//          3.) export the component so other components can use this class as well.
//                  - add ` export default Videolist; ` to the bottom of the component.
//
//          4.)Jump back over to index.js file
//                  -import VideoList from './components/video-list'
//
//          5.) Also in index.js, add VideoList into the component render return function.
//
//          ex.)    render() {
//                  return (
//                      <div>Youtube components
//                          <SearchBar />
//                           <VideoList />
//                      </div>);
//                      }
//
//              -<END CREATE COMPONENT AND RENDER IT>-
//
//
// ###########  PASSING CHILD COMP DATA FROM CHILD TO PARENT    ###########
//  NOTE: reference 3:26
//
//  1.) From the first Lesson, we set up the parent comp (App).
//  2.) We just set up child comp (video-list).
//  3.) Child comp video-list will need to have access to this.state({ videos: []})
//        so that video-list can populate itself.
//              ... so ...
//          WE'LL NEED TO PASS DATA FROM PARENT TO CHILD.
//              -how do we do this??? see step 4
//
//
//
// ###########              PASSING PROPS                       #############
//  4.) Define a property in the jsx tag used to render VideoList component located in
//      the return render() located in index.js.
//
//      <VideoList videos={this.state.videos}/>
//
//      ex.)
//          ##### index.js ######
//          render() {
//          return (
//              <div>Youtube components
//                  <SearchBar />
//                  <VideoList videos={this.state.videos}/>         <==make the change here
//              </div>);
//          }
//
//      -When we add videos={this.state.videos} to the JSX tag, video-list will get updated
//          from the props obj (ie, this.state = {videos: []})
//              within inside the constructor func within class App which is located in index.js
//
//  5.) !!!!!           IMPORTANT           !!!!!:
//          So... when we use a func comp, (such as our video-list.js comp) the props OBJECT
//          from within the constructor func located inside class App located in index.js,
//          it will arrive as an arg called props AND get passed to func class for VideoList located
//          inside video-list.js
//
//          ex.) const VideoList = (props) => {...}
//
//          After we pass the props into this comp,
//              we can CALL the props and start to run methods on it.
//                  ... like .length
//          ex.)
//
//                const VideoList = (props) => {
//                    return (
//                        <ul className="col-md-4 list-group">
//                            {props.videos.length}
//                        </ul>
//                    );
//                };
//
//
// ###########     SOMETHING TO KEEP IN MIND REGARDING PROPS     #############
//
//  Class Components:           props is an obj because we define it in the constructor
//  Functional Components:      props are ARGUMENTS because we pass them in from some class
//


import React from 'react';

const VideoList = (props) => {
    return (
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
    );
};

export default VideoList;