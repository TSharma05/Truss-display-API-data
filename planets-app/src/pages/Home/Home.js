import React, {useState, useEffect} from 'react'



export default function Home() {
    const [planets, setPlanets] = useState([]);  // this is the state variable that will hold the data from the API
    const [loading, setLoading] = useState(true); // this is the state variable that will hold the loading status

    // The useEffect hook is used to perform side effects in response to changes in the component state.
    // This useEffect will fetch the planets data from the API and set the state to the data.
    useEffect(() => {
        const getPlanets = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/planets/');
                const data = await response.json();
                if (data.code === 400) {
                    return {'error' : `there was an error ${data.detail}`}
                } else {
                    setPlanets(data.results);
                    setLoading(false);
                }
            }
            catch (error) {
                console.log(error);
                return null;
            }
        }
        getPlanets()
    }, [])

    // This function will render the planets but will first check to see if there is data in the state variable
    // If there is data in the state variable, it will render the planets
    // If there is no data in the state variable, it will render a loading message
    const renderPlanets = () => {
        // this if statement will display a loading message while the API data is loading
        if (loading) {
            return <p>Loading...</p>
        }
        // this if statement will display if nothing is loading and there is no data in the state variable
        if (!loading && !planets) {
            return <p>There was an error</p>
        }
        // the else statement will display the planet data
        else {
            return planets.map(planet => {
                return <p>{planet.name}</p>
            })
        }
    }

  return (
    <div>
      <h1>Home</h1>
      {renderPlanets()}
    </div>
  )
}