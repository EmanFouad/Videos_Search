import React, { useState , useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from './../hooks/useVideos';


const App = () => {
 const [videos,Search] = useVideos('buildings')
  const [selectedVideo , setSelectedVideo] = useState(null);
  useEffect(()=>{
    setSelectedVideo(videos[0]);
  },[videos])
  
 
  const onVideoSelect = (video) =>{
    setSelectedVideo(video);
  }

  return ( 
    <div className="ui container">
        <SearchBar onSearchSubmit={Search}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={onVideoSelect} videos={videos}/>
            </div>
          </div>
        </div>
      </div>
   );
}
 
export default App;

