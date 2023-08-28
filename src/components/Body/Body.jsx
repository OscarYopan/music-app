import { AnimationContainer } from '../Animation/AnimationContainer'
import { MusicList } from '../MusicList/MusicList.jsx'

import './Body.css'

export const Body = () => {
  return (
    <div className='body-container'>
      <AnimationContainer />
      <MusicList />
    </div>
  )
}
