import './Head.css'

export const Head = () => {
  function openHome() {
    // <Home />
  }

  return (
    <div className='head'>
      <div className='icon' onClick={openHome}>
        <i className="fa-solid fa-house"></i>
      </div>

      <div className='icon'>
        <i className="fa-solid fa-book"></i>
      </div>

      <div className='icon'>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
