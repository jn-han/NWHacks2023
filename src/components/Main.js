import React from 'react'
import {Routes, Route } from 'react-router-dom' 
import Home from '../pages/Home'
import Browse from '../pages/Browse'
import Friends from '../pages/Friends'
import Following from '../pages/Following'

const Main = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/friends' element={<Friends/>}></Route>
        <Route exact path='/following' element={<Following/>}></Route>
        <Route exact path='/browse' element={<Browse/>}></Route>
    </Routes>
  )
}

export default Main