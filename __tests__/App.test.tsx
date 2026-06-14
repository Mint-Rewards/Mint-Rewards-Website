/// <reference types="jest" />

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/pages/ActualHome';

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});