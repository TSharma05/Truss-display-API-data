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
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}