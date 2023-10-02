import './Home.css'
import { TimeLine } from '../TimeLine/TimeLine'

export const Home = () => {
  return (
    <div className='home-container'>
      <div className='music-img'>
        <img src="https://images.unsplash.com/photo-1581742009630-afd6768aa98e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60" alt="Engenheiros do Hawwai ALbum Pic" />
      </div>
      <div className='music-info'>
        <h3>Music Name</h3>
        <h4>Artist Name</h4>
      </div>
      <div className='music-controls'>
        <i className="fa-solid fa-play"></i>
        <i className="fa-solid fa-pause"></i>
      </div>
      <TimeLine />

      {/* <div className='prov-home'></div> */}
    </div>
  )
}
