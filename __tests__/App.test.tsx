/// <reference types="jest" />

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Home from '../src/pages/ActualHome';

/*
 * MemoryRouter is required, not decoration. The home page renders <Link> in
 * several places, and a Link reads its router context on render — outside a
 * router that context is null and destructuring `basename` off it throws, so
 * the smoke test failed on the page's own markup rather than on anything it
 * was testing. MemoryRouter is the right one here: it keeps the history in
 * memory instead of touching jsdom's URL.
 */
describe('Home Page', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
