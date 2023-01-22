
import { createReactClient, LivepeerConfig, studioProvider } from '@livepeer/react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/NavBar/SideBar'
import Uploader from './components/LivePeer/Uploader'
import { Router, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Browse from './pages/Browse'
import Main from './components/Main';

function App() {

  const client = createReactClient({
    provider: studioProvider({ 
      apiKey: 'bbc86f89-b5c0-48fa-9be7-61e89cbd0d98'
    })
  })

  const PERSONAL_INFO = {
    name: 'John Doe',
    photo: 'https://media.istockphoto.com/id/1288538088/photo/portrait-young-confident-smart-asian-businessman-look-at-camera-and-smile.jpg?b=1&s=612x612&w=0&k=20&c=r6yIXD9qE6vwqcg3-5iIxL6v3O_lV75oLpDTDQn-o8Y='
  }
  
  const DUMMY_LIVE = [
    {
      name: "Tarik",
      photo: 'https://www.hollywoodreporter.com/wp-content/uploads/2022/02/Tarik-Courtesy-of-Tarik-H-2022.jpg',
    },
    {
      name: "Tenz",
      photo: "https://cdn.oneesports.gg/cdn-data/2021/06/Valorant_TenZSentinelsVCTStage2MastersPost_2-450x319.jpg",
    },
    {
      name: "ShahZaM",
      photo: "https://img-cdn.hltv.org/playerbodyshot/INzwphXFGHPV3ecful9aqW.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=150%2C18%2C400%2C400&w=800&s=29fe1dc75c53822debb2957e5476ef1f",
    }
  ]
  


  return (
    <div>
        <LivepeerConfig client={client}>
          <NavBar personalSrcImg={PERSONAL_INFO.photo}></NavBar>
          <Main></Main>
          <SideBar liveStreamers={DUMMY_LIVE}></SideBar>
        </LivepeerConfig>
    </div>

  );
}

export default App;
