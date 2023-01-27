import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe('Header Component', () => {
  test('Header component should render with correct start and end year', () => {
    const { getByText } = render(<Header startYear={2010} endYear={2025} />);
    expect(getByText('F1 World Champions')).toBeInTheDocument();
    expect(getByText('Season 2010 - 2025')).toBeInTheDocument();
  });

  test('Header component should render with default start and end year', () => {
    const { getByText } = render(<Header />);
    expect(getByText('F1 World Champions')).toBeInTheDocument();
    expect(getByText('Season 2005 - 2022')).toBeInTheDocument();
  });
});
