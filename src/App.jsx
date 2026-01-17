import gsap from 'gsap';
import {ScrollTrigger, SplitText} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>
      <h1 className='flex-center text-indigo-400 text-3xl'>Hello Gsap</h1>
    </div>
  )
}

export default App
