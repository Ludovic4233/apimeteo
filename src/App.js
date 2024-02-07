import { useEffect, useState } from 'react';
import Search from './components/Search';
import Display from './components/Display';
import Historic from './components/Historic';

const App = () => {

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;

  const [formData, setFormData] = useState({
    city: 'Paris'
  });

  const [cityData, setCityData] = useState();

  //console.log(cityData);

  const getData = (data) => {
    setFormData(data)
  }

  //console.log(formData)

  const [ histories, setHistories ] = useState([]);

  const handleHistories = () => {
    setHistories(prevState => {
      return [...histories, cityData]
    })
  }

  //console.log(histories);

  useEffect(() => {
    fetch(apiUrl+`${formData.city}`+apiKey)
    .then(res => res.json())
    .then(resJson => setCityData(resJson))
  }, [formData.city])

  return (
    <>
      <Search getData={getData} />
      {cityData &&
      <>
        <Display cityData={cityData} />
        <button onClick={handleHistories}>Obtenir historique</button>
        {histories &&
          <Historic histories={histories} />
        }
      </>
      }
    </>
  )
}

export default App;