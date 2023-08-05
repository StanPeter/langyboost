import MainBody from 'components/layouts/MainBody/MainBody';
import Select from 'components/UI/Select/Select';
import { useGetPhrasesQuery } from 'generated/graphql';
import React from 'react';
import styles from './articlesPage.module.scss';

interface ArticlesPageProps {}

const DATA = [
    {
        name: 'German',
        imgSrc: 'https://images.emojiterra.com/twitter/v13.0/512px/1f1e9-1f1ea.png',
        value: 'german'
    },
    {
        name: 'Armenian',
        imgSrc: 'https://images.emojiterra.com/twitter/v13.0/512px/1f1e6-1f1e9.png',
        value: 'armenian'
    },
    {
        name: 'aloha',
        value: 'aloha'
    }
];

const ArticlesPage: React.FC<ArticlesPageProps> = () => {
    const { data, error } = useGetPhrasesQuery();

    // useEffect(() => {
    //   con

    // }, [])

    console.log(data, 'DATA ACCESSS');

    if (error) alert(error);

    return (
        <MainBody>
            <div className={styles.coursesPage}>
                <h2>Articles</h2>
                <div className={styles.coursesFilters}>
                    <Select
                        type="multiselect"
                        useCase="filter"
                        data={DATA}
                        text="Filter by language"
                        value={['german']}
                        onChange={() => {}}
                    />
                    <div className={styles.coursesFilter}>
                        <label htmlFor="">Sort by</label>
                        <select name="sourceLanguage" id="" className={styles.coursesSelect}>
                            <option value="en">Newest</option>
                            <option value="ge">Most popular</option>
                            <option value="ge">Most viewed</option>
                        </select>
                    </div>
                </div>
                <hr className={styles.coursesSeparator} />
            </div>
        </MainBody>
    );
};

export default ArticlesPage;
