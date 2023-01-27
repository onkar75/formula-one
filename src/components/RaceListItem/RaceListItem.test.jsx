import React from 'react';
import { render } from '@testing-library/react';
import RaceListItem from './RaceListItem';

describe('RaceListItem', () => {
  it('should display the correct information', () => {
    const round = 1;
    const raceName = 'Australian Grand Prix';
    const driverName = 'Lewis Hamilton';
    const constructorName = 'Mercedes';
    const highLighted = true;
    const { getByText } = render(
      <RaceListItem
        round={round}
        raceName={raceName}
        driverName={driverName}
        constructorName={constructorName}
        highLighted={highLighted}
      />
    );

    expect(getByText(`Round ${round}: ${raceName}`)).toBeInTheDocument();
    expect(getByText(driverName)).toBeInTheDocument();
    expect(getByText(constructorName)).toBeInTheDocument();

    const raceListItemElement = getByText(
      `Round ${round}: ${raceName}`
    ).closest('.row');

    expect(raceListItemElement).toHaveClass('highlighter');
  });
});
