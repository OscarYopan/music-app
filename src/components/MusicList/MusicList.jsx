import './MusicList.css'

export const MusicList = () => {
  return (
    <div className='music-list'>
      <ul>
        <li>
          <div className='music-pic'>
            <img src="https://images.unsplash.com/photo-1606403444347-fdd6b74492d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Album Cover" />
          </div>
          <div className='music-info'>
            <p className='music-title'>Exercito de um Homem Só</p>
            <h5 className='music-artist'>Engenheiros do Hawaii</h5>
          </div>
          <span className='music-time'>5:25</span>
        </li>

        <li>
          <div className='music-pic'>
            <img src="https://images.unsplash.com/photo-1606403444347-fdd6b74492d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Album Cover" />
          </div>
          <div className='music-info'>
            <p className='music-title'>Da Janela</p>
            <h5 className='music-artist'>Nenhum de Nos</h5>
          </div>
          <span className='music-time'>4:36</span>
        </li>

        <li>
          <div className='music-pic'>
            <img src="https://images.unsplash.com/photo-1606403444347-fdd6b74492d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Album Cover" />
          </div>
          <div className='music-info'>
            <p className='music-title'>Love of my life</p>
            <h5 className='music-artist'>Queen</h5>
          </div>
          <span className='music-time'>3:48</span>
        </li>

        <li>
          <div className='music-pic'>
            <img src="https://images.unsplash.com/photo-1606403444347-fdd6b74492d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Album Cover" />
          </div>
          <div className='music-info'>
            <p className='music-title'>Envelheço na Cidade</p>
            <h5 className='music-artist'>Ira</h5>
          </div>
          <span className='music-time'>5:25</span>
        </li>    
      </ul>
    </div>    
  )
}
