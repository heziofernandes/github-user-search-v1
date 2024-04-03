import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from '.';

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button title="Click me" />);

    expect(container).toMatchSnapshot();
  });

  test('Should add a custom style class correctly', () => {
    const { container } = render(<Button title="Botão" customStyle="custom" />);
    expect(container.firstChild).toHaveClass('custom');
  });

  test('Should be enabled by default', () => {
    render(<Button title="Clique Aqui" />);
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
  });

  test('Should call the onClick function when the button is clicked', () => {
    const handleClick = jest.fn();
    render(<Button title="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  describe('When prop disabled is passed', () => {
    it('renders as disabled', () => {
      render(<Button title="Disabled button" isDisabled />);

      const disabledButton = screen.getByText(/disabled button/i);

      expect(disabledButton).toBeDisabled();
    });
  });
});
