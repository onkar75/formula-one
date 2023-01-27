import { Link } from 'react-router-dom';
import Logo from '../Layout/Logo/Logo';
import './ChampionList.css';

const ChampionList = ({ champList }) => {
  const champListSorted = champList.sort((a, b) => b.season - a.season);
  return (
    <div className="card">
      {champListSorted.map((champion) => (
        <div key={champion.season} className="card__profile">
          <div>
            <Logo />
            <h3 className="card__profile__name">{champion.fullName}</h3>
            <p className="card__profile__season">{champion.season}</p>
          </div>
          <div className="card__profile__actions">
            <Link
              to={`season/${champion.season}/${champion.driverId}`}
              className="card__profile__actions__link"
            >
              Races
            </Link>
          </div>

          <div className="card__profile__card-stats">
            <div className="card__profile__card-stats__stats">
              <div className="card__profile__card-stats__stats__value">
                {champion.points}
              </div>
              <div className="card__profile__card-stats__stats__type">
                Points
              </div>
            </div>
            <div className="card__profile__card-stats__stats">
              <div className="card__profile__card-stats__stats__value">
                {champion.wins}
              </div>
              <div className="card__profile__card-stats__stats__type">Wins</div>
            </div>
            <div className="card__profile__card-stats__stats">
              <div className="card__profile__card-stats__stats__value">
                {champion.nationality}
              </div>
              <div className="card__profile__card-stats__stats__type">
                Nationality
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChampionList;
