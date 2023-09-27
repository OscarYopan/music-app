import './Head.css'
import { Controls } from '../Controls/Controls'
import { Home } from '../Home/Home'
import { MusicList } from '../MusicList/MusicList'

export const Head = () => {
  function openHome() {
    // <Home />
  }

  return (
    <div className='head'>
      <div className='icon' onClick={openHome}>
        <i className="fa-solid fa-house"></i>
        <Home />
      </div>

      <div className='icon'>
        <i className="fa-solid fa-book"></i>
        <MusicList />
      </div>

      <div className='icon'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <Controls />
      </div>
    </div>
  )
}
