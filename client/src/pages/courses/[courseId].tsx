import MainBody from 'components/layouts/MainBody';
import CourseLevelDetailGraph from 'components/pages/courses/CourseLevelDetailGraph';
import Separator from 'components/UI/Separator';
import React from 'react';

interface CourseDetailPageProps {}

const CourseDetailPage: React.FC<CourseDetailPageProps> = () => {
    return (
        <MainBody>
            <div className="">courses detail page</div>
            <Separator useCase="fullHorizontal" />
            <CourseLevelDetailGraph />
        </MainBody>
    );
};

export default CourseDetailPage;
