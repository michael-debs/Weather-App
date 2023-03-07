import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function notFound () {
    return (
        <div className="notFound fade-in">
            <FontAwesomeIcon className="alert" icon={faCircleExclamation} />
            Check if you spelled the city name correctly!
        </div>
    )
}

export default notFound;