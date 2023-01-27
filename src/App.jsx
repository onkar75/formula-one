import React, { useEffect, useState, useCallback } from 'react';
import Header from './components/Layout/Header/Header';
import ChampionList from './components/Champion/ChampionList';
import './App.css';

const YEAR_LIST = Array.from({ length: 18 }, (_, value) => value + 2005);

function App() {
  const [champions, setChampions] = useState([]);

  const getChampions = useCallback(async () => {
    const result = await Promise.all(
      YEAR_LIST.map(async (year) => {
        const res = await fetch(
          `https://ergast.com/api/f1/${year}/driverStandings/1.json`
        );
        const data = await res.json();
        return data;
      })
    );

    const championList = result.map((res) => {
      const { season, StandingsLists } = res.MRData.StandingsTable;

      const {
        points,
        wins,
        Driver: { driverId, givenName, familyName, nationality },
      } = StandingsLists[0].DriverStandings[0];

      return {
        driverId,
        season,
        fullName: `${givenName} ${familyName}`,
        nationality,
        points,
        wins,
      };
    });

    setChampions(championList);
  }, []);

  useEffect(() => {
    getChampions();
  }, [getChampions]);

  return (
    <div className="App">
      {champions && champions.length > 0 && (
        <ChampionList champList={champions} />
      )}
    </div>
  );
}

export default App;
