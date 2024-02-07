const Display = ({ cityData }) => {

    //console.log(cityData)

    return (
        <>
            <h1>{cityData.name}</h1>
            <ul>
                <li>Température: {cityData.main.temp}°C</li>
                <li>Température minimale: {cityData.main.temp_min} °C</li>
                <li>Température maximale: {cityData.main.temp_max} °C</li>
                <li>Humidité: {cityData.main.humidity} </li>
                <li>Description: {cityData.weather[0].description} </li>
            </ul>

        </>
    )
}

export default Display;