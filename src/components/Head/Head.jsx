import { useState } from 'react';
import { Home } from '../Home/Home'
import './Head.css'

export const Head = () => {
  const [homeShow, setHomeShow] = useState(false);
  // const [favShow, setFavtShow] = useState(false);

  const handleClickHome = () => {
    setHomeShow(current => !current);
  };

  // const handleClickFav = () => {
  //   setFavtShow(current => !current);
  // };

  return (
    <div className='head'>
      <div
        className='icon'
        onClick={handleClickHome}
        // onMouseEnter={handleClickHome}
        // onMouseLeave={handleClickHome}
      >
        <i className="fa-solid fa-house"></i>
        {homeShow && <Home />}
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
  )
}
