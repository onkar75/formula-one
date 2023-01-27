import { render } from '@testing-library/react';
import RaceListItem from '../RaceListItem/RaceListItem';
import SeasonReport from './SeasonReport';

describe('SeasonReport component', () => {
  test('should render the correct data for the given season', () => {
    const races = [
      {
        round: 1,
        raceName: 'Australian Grand Prix',
        Results: [
          {
            Driver: {
              givenName: 'Lewis',
              familyName: 'Hamilton',
              driverId: 'hamilton',
            },
            Constructor: {
              name: 'Mercedes',
            },
          },
        ],
      },
      {
        round: 2,
        raceName: 'Bahrain Grand Prix',
        Results: [
          {
            Driver: {
              givenName: 'Max',
              familyName: 'Verstappen',
              driverId: 'verstappen',
            },
            Constructor: {
              name: 'Red Bull Racing',
            },
          },
        ],
      },
    ];

    const { getByText, getAllByText } = render(
      <SeasonReport races={races} season={2021} championId="hamilton" />
    );
    const season = getAllByText(/Season/i);
    const race = getAllByText(/Race/i);
    const winner = getAllByText(/Winner/i);
    const auto = getAllByText(/Auto Make/i);

    expect(season[0]).toBeInTheDocument();
    expect(race[0]).toBeInTheDocument();
    expect(winner[0]).toBeInTheDocument();
    expect(auto[0]).toBeInTheDocument();
  });

  test('should render null when there are no races', () => {
    const { queryByText } = render(
      <SeasonReport races={[]} season={''} championId="hamilton" />
    );

    expect(queryByText('Season: ')).toBeNull();
    expect(queryByText('Round/Race: ')).toBeNull();
    expect(queryByText('Winner: ')).toBeNull();
    expect(queryByText('Auto Make: ')).toBeNull();
  });
});
