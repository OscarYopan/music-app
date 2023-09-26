import './Home.css'

export const Home = () => {
  return (
    <div className='home-container'>
      <div className='player-img'>
        <img src="" alt="" />
        <h3>Music Name</h3>
        <h4>Artist Name</h4>
      </div>
      <button>
        <i className="fa-solid fa-play"></i>
        <i className="fa-solid fa-pause"></i>
      </button>
    </div>
  )
}
