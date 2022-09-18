import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Footer from './Footer';
import ProfileImg from './ProfileImg';
import Details from './Details';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ProfileImg />
      <Details />
      <Footer />
    </div>
  )
}

export default App
