import { useState } from 'react'
import { faMagnifyingGlass, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";


import Clear from './assets/Clear.svg'
import Clouds from './assets/Clouds.svg'
import Drizzle from './assets/Drizzle.svg'
import Rain from './assets/Rain.svg'
import Snow from './assets/Snow.svg'
import Thunderstorm from './assets/thunderstorm.svg'

import './App.css'

import Weather from './components/Weather'
import NotFound from './components/404'
let first = true;

function App() {
  const [weather, setWeather] = useState();
  const [icon, setIcon] = useState();
  const [boxClassName, setBoxClassName] = useState();
  const [imgClassName, setImgClassName] = useState();
  const [textClassName, setTextClassName] = useState();
  const [containerClassName, setContainerClassName] = useState();
  const [notFound, setNotFound] = useState();

  return (
    <>
      <div className={`container ${containerClassName}`}>

        {/* Search box */}
        <div className="search-box">
          <span>
            <FontAwesomeIcon id='location' className='icon' icon={faLocationDot} />
            <input type="text" placeholder='city' />
          </span>
          <FontAwesomeIcon id='search' className='icon' icon={faMagnifyingGlass} onClick={showResults} />
        </div>

        {/* Main */}
        {notFound && <NotFound />}
        {weather && <Weather className='weather' weather={weather} icon={icon} styles={{ boxClassName: boxClassName, imgClassName: imgClassName, textClassName: textClassName }} />}
      </div>
    </>
  )

  function showResults() {
    setNotFound(false)
    if (!first) {
      setContainerClassName('scale-down')
      setBoxClassName('fade-out')
      setTextClassName('fade-out')
      setImgClassName('fade-out')
    }

    const city = document.querySelector('.search-box span input').value
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ef70ad32dc6e70d009c75047a1e94a4a`)
      .then(({ data }) => {
        setWeather(data)
        console.log(data);
        switch (data.weather[0].main) {
          case 'Clouds':
            setIcon(Clouds)
            break;
          case 'Clear':
            setIcon(Clear)
            break;
          case 'thunderstorm':
            setIcon(Thunderstorm)
            break;
          case 'Fod':
            setIcon('Fog')
            break;
          case 'Snow':
            setIcon(Snow)
            break;
          case 'Rain':
            setIcon(Rain)
            break;
          case 'Drizzle':
            setIcon(Drizzle)
        }
        if (first) {
          setContainerClassName('scale-up')
          setBoxClassName('fade-in')
          setTextClassName('fade-in')
          setImgClassName('fade-in')
        }
        else {
          setTimeout(() => {
            setContainerClassName('scale-up')
            setBoxClassName('fade-in')
            setTextClassName('fade-in')
            setImgClassName('fade-in')
          }, 1000)
        }
        first = false
      })
      .catch(err => {
        setNotFound(true)
        console.error(err.message)
      })
  }
}

export default App


