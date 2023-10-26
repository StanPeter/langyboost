import MainBody from 'components/layouts/MainBody/MainBody';
import Button from 'components/UI/Button/Button';
import Carousel from 'components/UI/Carousel/Carousel';
import Header from 'components/UI/Header/Header';
import Select from 'components/UI/Select/Select';
import Separator from 'components/UI/Separator/Separator';
import React, { useEffect, useState } from 'react';
import { betaCourses, customCourses, mainCourses } from 'services/mockData';
import globalClasses from 'styles/globalClasses.module.scss';
import styles from './cousesPage.module.scss';

interface CoursesPageProps {}

const CoursesPage: React.FC<CoursesPageProps> = () => {
    /* HOOKS */
    const [iSpeak, setISpeak] = useState<string>('');
    const [wantToLearn, setWantToLearn] = useState<string>('');
    const [chosenCourse, setChosenCourse] = useState<string>('');
    const [_windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    // const btnDisabled = () => (iSpeak && wantToLearn && chosenCourse ? false : true);

    console.log('rerendering');

    return (
        <MainBody>
            <header>
                <Header level={1} classes={globalClasses.labelMargin} text="COURSES" />
            </header>
            <form className={styles.wrapper}>
                <div className={styles.filtersWrapper}>
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
                </div>
                {/* <div className={styles.btnWrapper}>
                    <Button disabled={btnDisabled} useCase="small" text="START_NOW" onClick={() => {}} />
                </div>
                {windowWidth < 400 && (
                    <Button disabled={btnDisabled} useCase="middle" text="START_NOW" onClick={() => {}} />
                )} */}
                <Separator useCase="fullHorizontal" />
            </form>
            <section>
                <Header level={2} classes={globalClasses.labelMargin} text="SUPPORTED_COURSES" />
                <Carousel data={mainCourses} value={chosenCourse} onChange={setChosenCourse} />
                <Separator useCase="fullHorizontal" />
            </section>
            <section>
                <Header level={2} classes={globalClasses.labelMargin} text="CUSTOM_GERMAN_COURSES" />
                <Carousel data={customCourses} value={chosenCourse} onChange={setChosenCourse} />
                <Separator useCase="fullHorizontal" />
            </section>
            <section>
                <Header level={2} classes={globalClasses.labelMargin} text="BETA_COURSES" />
                <Carousel data={betaCourses} value={chosenCourse} onChange={setChosenCourse} />
                <Separator useCase="fullHorizontal" />
            </section>
            <Button text="START_NOW" useCase="big" onClick={() => {}} />
        </MainBody>
    );
};

export default CoursesPage;
