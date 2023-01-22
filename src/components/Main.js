import React from 'react'
import {Routes, Route } from 'react-router-dom' 
import Home from '../pages/Home'
import Browse from '../pages/Browse'
import Friends from '../pages/Friends'
import Following from '../pages/Following'
import IRL from '../pages/IRL'
import Music from '../pages/Music'
import Games from '../pages/Games'
import StreamNow from '../pages/StreamNow'

const Main = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/friends' element={<Friends/>}></Route>
        <Route exact path='/following' element={<Following/>}></Route>
        <Route exact path='/browse' element={<Browse/>}></Route>
        <Route exact path='/games' element={<Games/>}></Route>
        <Route exact path='/music' element={<Music/>}></Route>
        <Route exact path='/irl' element={<IRL />}></Route>
        <Route exact path='/streamNow' element={<StreamNow />}></Route>
    </Routes>
  )
}

export default Main