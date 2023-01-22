
import { createReactClient, LivepeerConfig, studioProvider } from '@livepeer/react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/NavBar/SideBar'
import Uploader from './components/LivePeer/Uploader'


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
  
  const DUMMY_FOLLOWS = [
    {
      name: "Tarik",
      photos: 'https://img-cdn.hltv.org/playerbodyshot/HYUlqLD8id2eZcm02MUv7a.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=140%2C4%2C451%2C451&w=800&s=6b923ab89c9029d4280f766f39a4138d',
    },
    {
      name: "Tenz",
      photo: "https://static.wikia.nocookie.net/valorant_esports_gamepedia_en/images/2/2a/TenZIconPrfl.png/revision/latest?cb=20210604100450",
    },
    {
      name: "ShahZaM",
      photo: "https://static.wikia.nocookie.net/valorant_esports_gamepedia_en/images/1/16/SEN_ShahZaM_2020.png/revision/latest?cb=20200727130634",
    }
  ]
  


  return (
    <LivepeerConfig client={client}>
        <NavBar personalSrcImg={PERSONAL_INFO.photo}></NavBar>
        <SideBar></SideBar>
        
    </LivepeerConfig>

  );
}

export default App;
