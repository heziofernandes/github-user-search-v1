import { render, fireEvent, screen } from '@testing-library/react';

import { Input } from '.';

describe('Input', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Input />);
    expect(screen.getByTestId('input-container')).toBeInTheDocument();
    expect(getByTestId).toMatchSnapshot();
  });

  it('should render input element', () => {
    const { getByTestId } = render(<Input />);
    expect(screen.getByTestId('input-element')).toBeInTheDocument();
  });

  it('should apply custom styling when provided', () => {
    const { getByTestId } = render(<Input customStyle="custom" />);
    expect(screen.getByTestId('input-element')).toHaveClass('custom');
  });

  it('should pass additional props to the input element', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(<Input onChange={onChangeMock} />);
    fireEvent.change(screen.getByTestId('input-element'), { target: { value: 'test' } });
    expect(onChangeMock).toHaveBeenCalled();
  });
});
