import './App.css'
import './components/Head/Head.css'
import { useState } from 'react';
import { Home } from './components/Home/Home.jsx'
import { MusicList } from './components/MusicList/MusicList.jsx'
import { Controls } from './components/Controls/Controls.jsx'



function App() {
  const [homeShow, setHomeShow] = useState(false);
  const [libShow, setLibtShow] = useState(false);
  const [searchShow, setSearchtShow] = useState(false);


  const handleClickHome = () => {
    setHomeShow(current => !current);
  };

  const handleClickLib = () => {
    setLibtShow(current => !current);
  };

  const handleClickSearch = () => {
    setSearchtShow(current => !current);
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

          <div 
            className='icon'
            onClick={handleClickSearch}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        {homeShow && <Home />}
        {libShow && <MusicList />}
        {searchShow && <Controls />}

        
      </div>
    </>
  )
}

export default App
