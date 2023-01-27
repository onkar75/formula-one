import './RaceListItem.css';

const RaceListItem = (props) => {
  const { round, raceName, driverName, constructorName, highLighted } = props;
  return (
    <div className={`row ${highLighted ? 'highlighter' : ''}`}>
      <div className="cell">
        Round {round}: {raceName}
      </div>
      <div className="cell">{driverName}</div>
      <div className="cell">{constructorName}</div>
    </div>
  );
};

export default RaceListItem;
