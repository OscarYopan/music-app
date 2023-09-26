import './Home.css'

export const Home = () => {
  return (
    <div className='home-container'>
      <div className='music-img'>
        <img src="https://images.unsplash.com/photo-1617136778830-e15aea8ba3f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2105&q=80" alt="Engenheiros do Hawwai ALbum Pic" />
      </div>
      <div className='music-info'>
        <h3>Music Name</h3>
        <h4>Artist Name</h4>
      </div>
      <button>
        <i className="fa-solid fa-play"></i>
        {/* <i className="fa-solid fa-pause"></i> */}
      </button>
    </div>
  )
}
