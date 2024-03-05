import React from 'react';
import styles from './spinner.module.scss';

interface SpinnerProps {
    useCase?: 'fullPage' | 'small';
}

const Spinner: React.FC<SpinnerProps> = ({ useCase }) => {
    const classes = [styles.spinner];

    if (useCase === 'small') classes.push(styles.small);

    return <div className={classes.join(' ')}>Loading...</div>;
};

export default Spinner;
