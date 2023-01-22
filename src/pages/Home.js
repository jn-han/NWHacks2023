import React from 'react'
import './Home.css'
import VideoPlayer from '../components/LivePeer/VideoPlayer'
import Genres from '../components/Genres'

export const Home = () => {
  return (
     <div className="home--view">
      <div className="main-layer">
        <div className='videoPlayer'>
          <VideoPlayer id="ed645w942inanmsp"/>
          <div className='small-thumbnail'>
            {/* <img className ='small-images' src='https://cdn1.dotesports.com/wp-content/uploads/2020/11/13131004/9c988b004886e3affbe1f95cdeb898f4.jpg'></img>
            <img className='small-images' src='https://cdn1.dotesports.com/wp-content/uploads/2020/11/13131004/9c988b004886e3affbe1f95cdeb898f4.jpg'></img> */}
            <img></img>
          </div>
        </div>
        
      </div>
      <h2><span className='title-highlights'>Live Channels</span> Your Friends Like</h2>
      {/* <div className='scrolling-wrapper'>
         <div>
          <div className='video--players'>
            <VideoPlayer id="ed645w942inanmsp"/>
          </div>
          <div className='video--players'>
            <VideoPlayer id="ed645w942inanmsp"/>
          </div>
          <div className='video--players'>
            <VideoPlayer id="ed645w942inanmsp"/>
          </div>
        </div>
      </div> */}
      <h2><span className='title-highlights'>Discover</span> Small Communities</h2>
      <h2><span className='title-highlights'>Categories</span> You Might Like</h2>
      <Genres></Genres>
      <div className='divider'></div>
      


      <div className='selected-genres'>
        <img src='https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg'></img>
        <img src='https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg'></img>
        <img src='https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg'></img>
        <img src='https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg'></img>
        <img src='https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg'></img>
      </div>
      <div className='selected-genres-titles'>
        <h3>Just Chatting</h3>
        <h3>Apex Legends</h3>
        <h3>League of Legends</h3>
        <h3>Minecraft</h3>
        <h3>Valorant</h3>
      </div>
      
     </div>
  )
}

export default Home;
