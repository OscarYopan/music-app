// import { Home } from '../Home/Home'
import './Head.css'

export const Head = () => {
  const [cartShow, setCartShow] = useState(false);
  const [favShow, setFavtShow] = useState(false);

  const handleClickCart = () => {
    setCartShow(current => !current);
  };

  const handleClickFav = () => {
    setFavtShow(current => !current);
  };
  return (
    <div className='head'>
      <div 
        className='icon' 
        onClick={handleClickFav}
        onMouseEnter={handleClickFav}
        onMouseLeave={handleClickFav}
      >
        <i className="fa-solid fa-house"></i>
        {favShow && <Favorites />}
      </div>

      <div 
        className='icon'
        onMouseEnter={handleClickCart}
        onMouseLeave={handleClickCart}
      >
        <i className="fa-solid fa-book"></i>
        {cartShow && <Cart />}
      </div>

      <div className='icon'>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
