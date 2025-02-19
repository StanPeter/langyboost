import { styled } from '@mui/system';
import MainBody from 'components/layouts/MainBody';
import CourseCarousel from 'components/pages/courses/CourseCarousel';
import Button from 'components/UI/Button';
import Header from 'components/UI/Header';
import Select from 'components/UI/Select';
import Separator from 'components/UI/Separator';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { mainCourses } from 'services/mockData';

const StyledFiltersWrapper = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '@media (min-width: 600px)': {
        width: 'calc(80% - 1rem)',
        marginRight: '1rem',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
}));

interface CoursesPageProps {}

const CoursesPage: React.FC<CoursesPageProps> = () => {
    const [iSpeak, setISpeak] = useState<string>('');
    const [wantToLearn, setWantToLearn] = useState<string>('');
    const [chosenCourse, setChosenCourse] = useState<string>('');
    const [_windowWidth, setWindowWidth] = useState<number | null>(null);
    const router = useRouter();

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleWindowResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleWindowResize);
            }
        };
    }, []);

    // const btnDisabled = () => (iSpeak && wantToLearn && chosenCourse ? false : true);

    return (
        <MainBody>
            <header>
                <Header level={1} classes="labelMargin" text="COURSES" />
            </header>
            <form style={{ width: '100%', display: 'flex' }}>
                <StyledFiltersWrapper>
                    <Select
                        text="I_SPEAK"
                        type="singleselect"
                        useCase="filter"
                        data={mainCourses}
                        value={[iSpeak]}
                        onChange={val => setISpeak(val)}
                    />
                    <Select
                        text="WANT_TO_LEARN"
                        type="singleselect"
                        useCase="filter"
                        data={mainCourses}
                        value={[wantToLearn]}
                        onChange={val => setWantToLearn(val)}
                    />
                    <Select
                        text="CHOSEN_COURSE"
                        type="singleselect"
                        useCase="filter"
                        data={mainCourses}
                        value={[chosenCourse]}
                        onChange={val => setChosenCourse(val)}
                    />
                </StyledFiltersWrapper>
                {/* <div style={{ display: 'none' }}>
                    <Button disabled={btnDisabled} useCase="small" text="START_NOW" onClick={() => {}} />
                </div>
                {windowWidth < 400 && (
                    <Button disabled={btnDisabled} useCase="middle" text="START_NOW" onClick={() => {}} />
                )} */}
                <Separator useCase="fullHorizontal" />
            </form>
            <section>
                <Header level={2} classes="labelMargin" text="SUPPORTED_COURSES" />
                <CourseCarousel data={mainCourses} value={chosenCourse} onChange={setChosenCourse} />
                <Separator useCase="fullHorizontal" />
            </section>

            {/* <section>
                <Header level={2} classes="labelMargin" text="CUSTOM_GERMAN_COURSES" />
                <CourseCarousel data={customCourses} value={chosenCourse} onChange={setChosenCourse} />
                <Separator useCase="fullHorizontal" />

            </section>
            <section>
                <Header level={2} classes="labelMargin" text="BETA_COURSES" />
                <CourseCarousel data={betaCourses} value={chosenCourse} onChange={setChosenCourse} />
                <Separator useCase="fullHorizontal" />
            </section> */}
            <Button text="START_NOW" useCase="big" onClick={() => router.push('/courses/1')} />
        </MainBody>
    );
};

export default CoursesPage;
