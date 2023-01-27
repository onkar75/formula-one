import RaceListItem from '../RaceListItem/RaceListItem';
import './SeasonReport.css';
const SeasonReport = ({ races, season, championId }) => {
  const seasonRaces =
    races.length > 0
      ? races.map((race) => {
          return (
            <RaceListItem
              key={race.round}
              round={race.round}
              raceName={race.raceName}
              driverName={`${race.Results[0].Driver.givenName} ${race.Results[0].Driver.familyName}`}
              constructorName={race.Results[0].Constructor.name}
              highLighted={championId === race.Results[0].Driver.driverId}
            />
          );
        })
      : null;

  return (
    <>
      <div className="header">
        <h3>Season: {season}</h3>
      </div>
      <div className="table">
        <div className="col">Round/Race</div>
        <div className="col">Winner</div>
        <div className="col">Auto Make</div>
      </div>
      {seasonRaces}
    </>
  );
};

export default SeasonReport;
