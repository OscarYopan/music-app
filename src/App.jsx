import './App.css'
import './components/Head/Head.css'
import { useState } from 'react';
import { Home } from './components/Home/Home'

function App() {
  const [homeShow, setHomeShow] = useState(false);
  // const [favShow, setFavtShow] = useState(false);

  const handleClickHome = () => {
    setHomeShow(current => !current);
  };

  // const handleClickFav = () => {
  //   setFavtShow(current => !current);
  // };
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
            // onMouseEnter={handleClickCart}
            // onMouseLeave={handleClickCart}
          >
            <i className="fa-solid fa-book"></i>
            {/* {cartShow && <Cart />} */}
          </div>

          <div className='icon'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        {homeShow && <Home />}

        
      </div>
    </>
  )
}

export default App
