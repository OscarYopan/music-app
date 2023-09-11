import './App.css'
import { Controls } from './components/Controls/Controls'
import { Head } from './components/Head/Head'
import { AnimationContainer } from './components/Animation/AnimationContainer'
import { MusicList } from './components/MusicList/MusicList.jsx'


function App() {
  return (
    <>
      <div className='player-container'>
        <Head />
        <AnimationContainer />
        <MusicList />
        <Controls />
      </div>
    </>
  )
}

export default App
