import './App.css'
import { Body } from './components/Body/Body'
import { Controls } from './components/Controls/Controls'
import { Head } from './components/Head/Head'

function App() {
  return (
    <>
      <div className='player-container'>
        <Head />
        <Body />
        <Controls />
      </div>
    </>
  )
}

export default App
