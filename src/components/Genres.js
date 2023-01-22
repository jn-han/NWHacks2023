import React from 'react'
import './Genres.css'
import {Link} from 'react-router-dom'

const Genres = () => {
  return (
    <div className='group--categories'>
        <Link to="/games" className='interested-titles'><h2>GAMES</h2></Link>
        <Link to="/music" className='interested-titles'><h2>MUSIC</h2></Link>
        <Link to="/irl" className='interested-titles'><h2>IRL</h2></Link>

    </div>
  )
}

export default Genres