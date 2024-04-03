import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Home } from './Home';

describe('Home Component', () => {
  it('should be rendered flawlessly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByTestId('home-container')).toBeInTheDocument();
  });

  it('should contain the correct title', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText('Search for a user')).toBeInTheDocument();
  });

  it('should contain input field and button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText('Type a github username')).toBeInTheDocument();
    expect(screen.getByText('search')).toBeInTheDocument();
  });

  it('should navigate to the user page when clicking the button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText('Type a github username');
    const button = screen.getByText('search');

    fireEvent.change(input, { target: { value: 'testuser' } });
    fireEvent.click(button);
  });
});
