import styles from './ErrorBox.module.scss';

export const ErrorBox = ({ errorMessage }: {
  errorMessage: string;
}) => (
  <div className={styles.root}>
    {errorMessage}
  </div>
);
