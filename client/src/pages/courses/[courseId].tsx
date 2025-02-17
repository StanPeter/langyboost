import MainBody from 'components/layouts/MainBody';
import CourseLevelGraph from 'components/UI/CourseLevelGraph';
import Separator from 'components/UI/Separator';
import React from 'react';

interface CourseDetailPageProps {}

const CourseDetailPage: React.FC<CourseDetailPageProps> = () => {
    return (
        <MainBody>
            <div className="">courses detail page</div>
            <Separator useCase="fullHorizontal" />
            <CourseLevelGraph />
        </MainBody>
    );
};

export default CourseDetailPage;
