import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import useVideoList from '../Hooks/useVideoList';
import Video from './Video';

const Videos = () => {
    const [page, setPage] = useState(1);
    const {loading, error, videos, hasMore} =useVideoList(page);
    
    return (
      <div >
        {videos.length > 0 && (
          <InfiniteScroll dataLength={videos.length} hasMore={hasMore} loader="Loading" next={() => setPage(page + 4)}>

              
                  {videos.map((video) => 
                  video.noq > 0 ? (
                   <Link to={{
                     pathname : `/quiz/${video.youtubeID}`,
                     state: {
                        videoTitle : video.title
                     }
                   }}
                   key={video.youtubeID}
                   >
                    <Video title={video.title} id={video.youtubeID} noq={video.noq}/>
                    </Link>
                  ) : (
                    <Video title={video.title} id={video.youtubeID} noq={video.noq}/>
                  )
                  )}
              
              
          </InfiniteScroll>
        
          )}
        
        {!loading && videos.length === 0 && (
          <div className="error">No data found!</div>
        )}
        {error &&(
          <div className="error">No data found!</div>
        )}
        {loading && <div>Loading...</div>}
      </div>
    );
};

export default Videos;