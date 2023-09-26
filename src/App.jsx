import './App.css'
// import { Controls } from './components/Controls/Controls'
import { Head } from './components/Head/Head'
import { Home } from './components/Home/Home'
// import { AnimationContainer } from './components/Animation/AnimationContainer'
// import { MusicList } from './components/MusicList/MusicList.jsx'
// import { TimeLine } from './components/TimeLine/TimeLine'


function App() {
  return (
    <>
      <div className='player-container'>
        <Head />
        <Home />
        {/* <AnimationContainer />
        <TimeLine />
        <Controls />
        <MusicList /> */}
      </div>
    </>
  )
}

export default App
