import { createReactClient, LivepeerConfig, studioProvider } from '@livepeer/react';
import './App.css';
import CreateStreamForm from './components/CreateStreamForm';
import VideoPlayer from './components/VideoPlayer';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/NavBar/SideBar';

const 

const DUMMY_FOLLOWS = [
  {
    name: "Tarik",
    photos: asdfasd,
  },
  {
    name: "Tenz",
    photo: asdfads,
  }
  {
    name: "ShahZaM",
    photo: asdfjklasdf
  }
]


function App() {
  const client = createReactClient({
    provider: studioProvider({ 
      apiKey: 'bbc86f89-b5c0-48fa-9be7-61e89cbd0d98'
    })
  })

  return (
    <LivepeerConfig client={client}>
      <NavBar></NavBar>
      <SideBar></SideBar>
    </LivepeerConfig>
  );
}

export default App;
