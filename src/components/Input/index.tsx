import { HTMLProps } from 'react';
import cx from 'classnames';
import styles from './input.module.scss';

interface InputProps extends HTMLProps<HTMLInputElement> {
  customStyle?: string;
}

export const Input = ({ customStyle = '', ...rest }: InputProps) => {
  return (
    <div className={styles.container} data-testid="input-container">
      <input
        className={cx(styles.input, customStyle)}
        {...rest}
        data-testid="input-element"
      />
    </div>
  );
};
