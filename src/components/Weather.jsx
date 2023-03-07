import { faTemperatureThreeQuarters, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Weather(props) {
    const weather = props.weather;

    return (
        <>
            <div className={`weather ${props.styles.imgClassName}`}>
                <img src={`src/assets/${props.icon}.svg`} />
                <p className={`${props.styles.textClassName}`}>{weather.weather[0].main}</p>
            </div>
            <div className="weather-details">
                <div className={`${props.styles.boxClassName}`}>
                    <FontAwesomeIcon icon={faWind} />
                    <p>{weather.wind.speed} m/s</p>
                    <p>Wind</p>
                </div>
                <div className={`${props.styles.boxClassName}`}>
                    <img height={'50px'} src={'src/assets/err.svg'} />
                    <p>2 cm</p>
                    <p>Err Abdalla</p>
                </div>
                <div className={`${props.styles.boxClassName}`}>
                    <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
                    <p>{(weather.main.temp - 273.15).toFixed(2)}{'\u00b0'}C</p>
                    <p>Temperature</p>
                </div>
            </div>
        </>
    )
}

export default Weather

