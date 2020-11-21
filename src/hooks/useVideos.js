import {useState , useEffect} from 'react';
import youtube from './../Apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos , setVideos] = useState([]);
    useEffect(() =>{
        Search(defaultSearchTerm);
      },[defaultSearchTerm])
      const Search = async term =>{
        const res = await youtube.get('/search' , {
          params:{
            q:term
          }
        });
        setVideos(res.data.items);
      }
    return [videos , Search];
}
 
export default useVideos;
