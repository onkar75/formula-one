# Formula One App
The app utilizes the http://ergast.com/mrd/ API to display the season list and champions between 2005 to 2022.

By clicking on a season, the user can view the list of all races and the winners of the selected season.

The champion who won the race in the season also highlighted.

# Tools Used 
Html
Css
Javascript
React
React Router v6
Vite
React Testing Library
Vitest


# File Structure
    /src                    - Collection of React Codes
        /main.jsx           - this is where everything begins i.e (Routes are defined, App component is being rendered etc)
        /app.jsx            - This is the parent file which fetch the data and pass it to its children 
        /components         - contains react components (smart and dump) including layout and logo components
        /pages              - contains route related pages which includes the component to display the data 
        /utils             -  contains async code to fetch the data for race winners required for routeloader. 
        
# Screenshots 
<img width="930" alt="image" src="https://user-images.githubusercontent.com/22467891/215429958-a25f9cb9-8e2c-449e-8aa1-c78c62de087a.png">

![image](https://user-images.githubusercontent.com/22467891/215432034-21b0f655-4a5c-4515-9580-a905c6f69e55.png)



# Dependencies
    NodeJs (>=6.10)
    NPM 


# Setup


    1. Clone the repo

    2. cd to repo

    3. npm install

    4. npm run dev  to run in dev mode[localhost:3000]

    5. npm run build will build the app in the build directory

    6. npm test to run the test.


