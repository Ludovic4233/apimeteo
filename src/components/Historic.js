const Historic = ({ histories }) => {

    //console.log(histories)
    const formattedDate = (numDate) => {
        const timestamp = numDate;
        const date = new Date(timestamp * 1000);
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        const formattedDateString = date.toLocaleString('fr-FR', options); 

        return formattedDateString;
    }
    
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
                <th>Date</th>
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
                    <td>{formattedDate(history.dt)}</td>
                </tr>
            ))}
           </table>
        </>
    )
}

export default Historic