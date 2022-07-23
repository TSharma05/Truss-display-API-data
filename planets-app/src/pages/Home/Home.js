import React, {useState, useEffect} from 'react'

// below are the different Material UI components that are imported to be used in the app
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



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

    // This function is used for styling the table cells. Copied from Material UI documentation.
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
    
    // This function is used for styling the table rows. Copied from Material UI documentation.
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
    
      // This function calculates the planets surface area covered by water
    const calculateSurfaceWater = (props) => {
        let planet_area = 4 * Math.PI * Math.pow((0.5 * props.diameter), 2);
        let surfaceWater = Math.round(planet_area * (props.surface_water / 100));
        return surfaceWater;
      }

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
            return (
                <div className="planet">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700}} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Planet Name</StyledTableCell>
                                    <StyledTableCell align="right">Climate</StyledTableCell>
                                    <StyledTableCell align="right">Num of Residents</StyledTableCell>
                                    <StyledTableCell align="right">Terrains</StyledTableCell>
                                    <StyledTableCell align="right">Population</StyledTableCell>
                                    <StyledTableCell align="right">Water Surface Area (%)</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* This will map through the planet state variable */}
                                {planets.map((planet) => (
                                    <StyledTableRow key={planet.name}>
                                        <StyledTableCell component="th" scope="row">{planet.name}</StyledTableCell>
                                        <StyledTableCell component="th" scope="row" align="right">{planet.climate}</StyledTableCell>
                                        <StyledTableCell component="th" scope="row" align="right">{planet.residents.length}</StyledTableCell>
                                        <StyledTableCell component="th" scope="row" align="right">{planet.terrain}</StyledTableCell>
                                        {/* Used if-else statement to check if population is null or undefined */}
                                        <StyledTableCell component="th" scope="row" align="right">{!planet.population ? 'Unknown' : planet.population}</StyledTableCell>
                                        {/* Used if-else for surface area but zero surface area is also returning unknown which is not true. Want to only apply to NaN */}
                                        <StyledTableCell component="th" scope="row" align="right">{calculateSurfaceWater(planet) ? calculateSurfaceWater(planet) : 'Surface water is unknown' }</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <p>{planet.name}</p> */}
                </div>
            )
        }
    }

  return (
    <div>
      <h1>Home</h1>
      {renderPlanets()}
    </div>
  )
}