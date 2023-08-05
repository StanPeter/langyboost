import MainBody from 'components/layouts/MainBody/MainBody';
import Header from 'components/UI/Header/Header';
import React from 'react';
import styles from './notFound.module.scss';

interface NotFoundProps {}

/*

“A different language is a different vision of life.”

— Federico Fellini



“One language sets you in a corridor for life. Two languages open every door along the way.”

— Frank Smith



“He who knows no foreign languages knows nothing of his own.”

— Johann Wolfgang von Goethe



*/

const NotFound: React.FC<NotFoundProps> = () => {
    return (
        <MainBody>
            <Header level={1} text="404" shouldTranslate={false} classes={styles.code} />
            <Header level={1} text="PAGE_NOT_EXIST" />
        </MainBody>
    );
};

export default NotFound;
