import './Head.css'

export const Head = () => {
  return (
    <div className='head'>
      <div className='icon'>
        <i className="fa-solid fa-house"></i>
        <p>Home</p>
      </div>

      <div className='icon'>
        <i className="fa-solid fa-book"></i>
        <p>Library</p>
      </div>

      <div className='icon'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <p>Search</p>
      </div>

      <div className='icon'>
        <i className="fa-solid fa-gear"></i>
        <p>Settings</p>
      </div>
    </div>
  )
}
