import './MusicList.css'

export const MusicList = () => {
  return (
    <div className='music-list'>
      <ul>
        {/* <li>
          Lorem - Lorem ipsum dolor 
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          </button>
        </li>
        <li>
          Lorem - Lorem ipsum dolor 
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          </button>
        </li>
        <li>
          Lorem - Lorem ipsum dolor 
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          </button>
        </li>
        <li>
          Lorem - Lorem ipsum dolor 
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          </button>
        </li>
        <li>
          Lorem - Lorem ipsum dolor 
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          </button>
        </li> */}
        <li>
          <div className='music-pic'>
            <img src="https://images.unsplash.com/photo-1606403444347-fdd6b74492d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Album Cover" />
          </div>
          <div className='music-info'>
            <h5 className='music-artist'>Engenheiros do Hawaii</h5>
            <p className='music-title'>Exercito de um Homem Só</p>
          </div>
          <span className='music-time'>5:25</span>
        </li>

        <li>
          <div className='music-pic'>
            <img src="https://images.unsplash.com/photo-1606403444347-fdd6b74492d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Album Cover" />
          </div>
          <div className='music-info'>
            <h5 className='music-artist'>Nenhum de Nos</h5>
            <p className='music-title'>Da Janela</p>
          </div>
          <span className='music-time'>4:36</span>
        </li>

        <li>
          <div className='music-pic'>
            <img src="https://images.unsplash.com/photo-1606403444347-fdd6b74492d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Album Cover" />
          </div>
          <div className='music-info'>
            <h5 className='music-artist'>Queen</h5>
            <p className='music-title'>Love of my life</p>
          </div>
          <span className='music-time'>3:48</span>
        </li>

        <li>
          <div className='music-pic'>
            <img src="https://images.unsplash.com/photo-1606403444347-fdd6b74492d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Album Cover" />
          </div>
          <div className='music-info'>
            <h5 className='music-artist'>Ira</h5>
            <p className='music-title'>Envelheço na Cidade</p>
          </div>
          <span className='music-time'>5:25</span>
        </li>
      </ul>
    </div>    
  )
}
