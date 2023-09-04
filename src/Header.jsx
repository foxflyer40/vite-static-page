import kitty from './assets/spaceCat.jpg'
import './App.css'

 function Header() {
  return (
    <div className='header'>
      <div className='logoBox'>
        <a href="#" target="_blank">
          <img src={kitty} className="logo" alt="Vite logo" />
        </a>
        <div className='title>'>
        <h2>Vite + React</h2>
          <h4>A Space Cat production.</h4>
        </div>
      </div>
      <div className='course-name'><h2>
        React Course - Project 1
      </h2></div>
    </div>
  )
}

export default Header