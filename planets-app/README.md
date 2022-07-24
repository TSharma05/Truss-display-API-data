# Truss Planets API

**Step 1: Create React App**
- Clone the git repository to your local device / IDE. I will be using VS Code
- Create a react project using the following steps:
```
npx create-react-app planets-app
cd planets-app
npm start
```

**Step 2: Create Routes in App.js**
- You will need to install react router dom using the following: `npm i react-router-dom`. This will give you access to the BrowserRouter to help with navigation
- Remove the HTML that is found between the first div with the className="App". Be sure to keep that div. 
- Add in BrowserRouter and Routes since multiple routes will be generated.

**Step 3: Create and Setup Home component**
- In planets-app/src create a new folder titled pages
- In ./src/pages create another folder titled Home
- In .src/pages/Homes create two files: 
    - Home.js
    - Home.css
- The Home.js file is for the code that will be rendered on that page
- Home.css is to help with stylizing of the page


**Step 4: Fetch the data from SWAPI**
- Create a state variable for the planest using the useState Hook
- Fetch the API data using a useEffect hook.

**Step 5: Function to render the data**
- The function renderPlanets is used to render the planet data
- If there is no data then it will display a loading message
- This function will be called in the return div

**Step 6: Create table for displaying data**
- I changed the tab name to Planet API App in ./public/index.html
- I used Material UI for the table component. You must install this using the following: `npm install @mui/material @emotion/react @emotion/styled`
- At Material UI you need to go to Components, Data Display and follow the instructions for Table
- For this I used the Customization features in Table (1 h 34 min)

**Step 7: Display data in table**
- Map through the planets state variable. Name, Climate, Terrain, and Population were simply called from the data.
- For number of residents needed to find the length of the array using .length
- Create a function, calculateSurfaceWater, for the percent of surface water (47 min)

**Step 8: Link planet name to url**
- Use an <a> tag around the planet name variable
- The href for the <a> tag is planet.url

**Step 9: Sort table alphabetically**
- Create a new folder in ./src called TableHeader
- In ./src/TableHeader create a file called TableHeader.js
- Import the TableHeader to the Home.js to use it in the data table
- Copy the necessary functions from the Material UI documentation to get the sorting function to work.
- For this we are only using this on the planet name but it could be applied to each category of the data table
