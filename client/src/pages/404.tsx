import MainBody from 'components/layouts/MainBody';
import Header from 'components/UI/Header';
import React from 'react';

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
    return (
        <MainBody>
            <Header level={1} text="404" shouldTranslate={false} style={{ fontSize: '6rem' }} />
            <Header level={1} text="PAGE_NOT_EXIST" />
        </MainBody>
    );
};

export default NotFound;
