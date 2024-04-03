import React, {useState, useEffect, forwardRef} from 'react';
import { get } from './mockBackEnd/fetch';

export default function Forecast(){
  //Utilisation du Hook d'état pour gérer les données de prévision, les notes et le type de prévision
  const [data, setData] = useState();
  const [notes, setNotes] = useState({});
  const [forecastType, setForecastType] = useState("/daily");

  //Utilisation du Hook d'éffet pour demander les données de prévision lors du montage du composant
  useEffect(() => {
    alert('Requested data from server ...');
    get(forecastType).then((response) => {
      // alert('Response: ' + JSON .stringify(response, '',2))
      setData(response.data)
    })
  }, [forecastType])

  //Fonction pour gérer le changement des notes
  const handleChange = (index) => ({target}) =>
    setNotes((prev) => ({
      ...prev,
      [index]: target.value
    }))

    if(!data){
      return <p>Loading...</p>
    }

    // Rendu du composant
  return (
    <div className='App'>
      <h1>My Weather Planner</h1>
      <div>
        <button onClick={() => setForecastType('/daily')}>5-day</button>
        <button onClick={() => setForecastType('/hourly')}>Today</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Summary</th>
            <th>Avg Temp</th>
            <th>Precip</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={item.id}>
              <td>{item.summary}</td>
              <td> {item.temp.avg}°F</td>
              <td>{item.precip}%</td>
              <td>
                <input
                  value={notes[item.id] || ''}
                  onChange={handleChange(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}