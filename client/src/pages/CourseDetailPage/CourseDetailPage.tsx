import MainBody from 'components/layouts/MainBody/MainBody';
import Separator from 'components/UI/Separator/Separator';
import VerticalCarousel from 'components/UI/VerticalCarousel/VerticalCarousel';
import React from 'react';

interface CourseDetailPageProps {}

const CourseDetailPage: React.FC<CourseDetailPageProps> = () => {
    return (
        <MainBody>
            <div className="">courses detail page</div>
            <Separator useCase="fullHorizontal" />
            <VerticalCarousel activeLevel={1} />
        </MainBody>
    );
};

export default CourseDetailPage;
