import { render, screen } from '@testing-library/react';

import { Spinner } from '.';

describe('Spinner', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Spinner />);
    expect(screen.getByTestId('spinner-container')).toBeInTheDocument();
    expect(getByTestId).toMatchSnapshot();
  });

  it('should contain the correct spinner elements', () => {
    const { getAllByTestId } = render(<Spinner />);
    const spinnerElements = screen.getAllByTestId('spinner-element');
    expect(spinnerElements).toHaveLength(4);
  });
});
