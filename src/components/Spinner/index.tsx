import styles from './spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.spinner} data-testid="spinner-container">
      <div data-testid="spinner-element" />
      <div data-testid="spinner-element" />
      <div data-testid="spinner-element" />
      <div data-testid="spinner-element" />
    </div>
  );
};
