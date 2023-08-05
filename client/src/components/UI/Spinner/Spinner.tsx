import React from 'react';
import styles from './spinner.module.scss';

interface SpinnerProps {}

const Spinner: React.FC<SpinnerProps> = () => {
    return <div className={styles.spinner}>Loading...</div>;
};

export default Spinner;
