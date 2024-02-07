const Historic = ({histories}) => {

    //console.log(histories)

    return (
        <>
           <h1>Historique</h1>
           <table>
            <tr>
                <th>Ville</th>
                <th>Température</th>
                <th>Température minimale</th>
                <th>Température maximale</th>
                <th>Humidité</th>
                <th>Description</th>
                <th>Vent</th>
            </tr>
            {histories.map((history) => (
                <tr key={history.id}>
                    <td>{history.name}</td>
                    <td>{history.main.temp}</td>
                    <td>{history.main.temp_min}</td>
                    <td>{history.main.temp_max}</td>
                    <td>{history.main.humidity}</td>
                    <td>{history.weather[0].description}</td>
                    <td>{history.wind.speed}</td>
                </tr>
            ))}
           </table>
        </>
    )
}

export default Historic