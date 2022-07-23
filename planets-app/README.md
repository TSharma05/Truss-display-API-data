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