import { describe, expect, test } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, createMemoryRouter } from 'react-router-dom';
import ChampionList from './ChampionList';

describe('ChampionList', () => {
  test('renders champion list correctly', () => {
    const champList = [
      {
        fullName: 'Sebastian Vettel',
        season: 2010,
        driverId: 5,
        points: 256,
        wins: 5,
        nationality: 'German',
      },
      {
        fullName: 'Lewis Hamilton',
        season: 2014,
        driverId: 44,
        points: 384,
        wins: 11,
        nationality: 'British',
      },
    ];

    const { getByText, getAllByText } = render(
      <ChampionList champList={champList} />,
      {
        wrapper: MemoryRouter,
      }
    );

    const races = getAllByText(/Races/i);
    const points = getAllByText(/Points/i);
    const wins = getAllByText(/Wins/i);
    const nationality = getAllByText(/Nationality/i);

    expect(getByText('Sebastian Vettel')).toBeInTheDocument();
    expect(getByText('2010')).toBeInTheDocument();

    expect(races[0]).toBeInTheDocument();
    expect(getByText('256')).toBeInTheDocument();
    expect(points[0]).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(wins[0]).toBeInTheDocument();
    expect(getByText('German')).toBeInTheDocument();
    expect(nationality[0]).toBeInTheDocument();

    expect(getByText('Lewis Hamilton')).toBeInTheDocument();
    expect(getByText('2014')).toBeInTheDocument();
    expect(getByText('384')).toBeInTheDocument();
    expect(getByText('11')).toBeInTheDocument();
    expect(getByText('British')).toBeInTheDocument();
  });

  //   test('should navigate to the correct route when a link is clicked', async () => {
  //     const champList = [
  //       {
  //         season: 2020,
  //         fullName: 'Lewis Hamilton',
  //         driverId: 1,
  //         points: 347,
  //         wins: 11,
  //         nationality: 'British',
  //       },
  //       {
  //         season: 2019,
  //         fullName: 'Sebastian Vettel',
  //         driverId: 2,
  //         points: 278,
  //         wins: 5,
  //         nationality: 'German',
  //       },
  //     ];

  //     const Router = createMemoryRouter();

  //     const { getAllByText } = render(
  //       <Router>
  //         <ChampionList champList={champList} />
  //       </Router>
  //     );
  //     const link = getAllByText('Races');
  //     fireEvent.click(link[0]);
  //     await waitFor(() => {
  //       expect(router.state.location.pathname).toEqual('/season/2021/123');
  //     });
  //     //expect(Router.history.location.pathname).toBe('/season/2021/123');
  //   });
});
