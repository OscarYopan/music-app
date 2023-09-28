import './App.css'
import './components/Head/Head.css'
import { useState } from 'react';
import { Home } from './components/Home/Home.jsx'
import { MusicList } from './components/MusicList/MusicList.jsx'


function App() {
  const [homeShow, setHomeShow] = useState(false);
  const [libShow, setLibtShow] = useState(false);

  const handleClickHome = () => {
    setHomeShow(current => !current);
  };

  const handleClickLib = () => {
    setLibtShow(current => !current);
  };
  return (
    <>
      <div className='player-container'>
        <div className='head'>
          <div
            className='icon'
            onClick={handleClickHome}
          >
            <i className="fa-solid fa-house"></i>
          </div>

          <div
            className='icon'
            onClick={handleClickLib}
          >
            <i className="fa-solid fa-book"></i>
          </div>

          <div className='icon'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        {homeShow && <Home />}
        {libShow && <MusicList />}
        
      </div>
    </>
  )
}

export default App
