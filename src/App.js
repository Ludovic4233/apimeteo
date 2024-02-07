import { useEffect, useState } from 'react';
import Search from './components/Search';
import Display from './components/Display';

const App = () => {

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;

  const [formData, setFormData] = useState({
    city: 'Paris'
  });

  const [cityData, setCityData] = useState();

  //console.log(cityData);

  // const [ histories, setHistories ] = useState();

  const getData = (data) => {
    setFormData(data)
  }

  //console.log(formData)

  
  useEffect(() => {
    fetch(apiUrl+`${formData.city}`+apiKey)
    .then(res => res.json())
    .then(resJson => setCityData(resJson))
  }, [formData.city])

  return (
    <>
      <Search getData={getData} />
      {cityData &&
        <Display cityData={cityData} />
      }
    </>
  )
}

export default App;