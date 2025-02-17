import { styled } from '@mui/material/styles';
import MainBody from 'components/layouts/MainBody';
import Select from 'components/UI/Select/Select';

// Main container
const StyledCoursesPage = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

// Select component
const StyledSelect = styled('select')(({ theme }) => ({
    outline: 'none',
    backgroundColor: 'var(--color-light-accent)',
    border: '2px solid var(--color-dark-accent)',
    boxShadow: 'var(--box-shadow-small)',
    borderRadius: '5px',
    width: '180px',
    height: '35px',
    fontSize: '20px',
    textAlign: 'left',
    margin: '1rem',
    paddingLeft: '12px',

    '& option': {
        backgroundColor: 'var(--color-light-accent)',
        border: '2px solid var(--color-dark-accent)',
    },
}));

// Filter container
const StyledFilter = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
});

// Separator
const StyledSeparator = styled('hr')({
    width: '755.01px',
    margin: '2rem 0',
    border: '1px solid var(--color-dark-accent)',
});

// Button container
const StyledButtonContainer = styled('div')({
    position: 'absolute',
});

// Button styles
const StyledButton = styled('button')({
    background: 'var(--color-main)',
    boxShadow: 'var(--box-shadow-small)',
    borderRadius: '15px',
    fontFamily: 'Roboto',
    fontSize: '16px',
    lineHeight: '40px',
    width: '177px',
    height: '31px',
    border: 'none',
    letterSpacing: '0.1em',
    color: 'var(--color-text-light)',
    position: 'relative',
    left: '200px',
    top: '1px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

// Filter label
const StyledFilterLabel = styled('label')({
    fontSize: '20px',
    lineHeight: '40px',
    textAlign: 'center',
    letterSpacing: '0.05em',
    color: 'var(--color-text-dark)',
    display: 'flex',
    flexDirection: 'column',
});

interface ArticlesPageProps {}

const DATA = [
    {
        name: 'German',
        imgSrc: 'https://images.emojiterra.com/twitter/v13.0/512px/1f1e9-1f1ea.png',
        value: 'german',
    },
    {
        name: 'Armenian',
        imgSrc: 'https://images.emojiterra.com/twitter/v13.0/512px/1f1e6-1f1e9.png',
        value: 'armenian',
    },
    {
        name: 'aloha',
        value: 'aloha',
    },
];


// Usage in component
const ArticlesPage: React.FC<ArticlesPageProps> = () => {
    return (
        <MainBody>
            <StyledCoursesPage>
                <h2>Articles</h2>
                <div >
                    <Select
                        type="multiselect"
                        useCase="filter"
                        data={DATA}
                        text="Filter by language"
                        value={['german']}
                        onChange={() => {}}
                    />
                    <StyledFilter>
                        <StyledFilterLabel htmlFor="">
                            Sort by
                            <StyledSelect name="sourceLanguage">
                                <option value="en">Newest</option>
                                <option value="ge">Most popular</option>
                                <option value="ge">Most viewed</option>
                            </StyledSelect>
                        </StyledFilterLabel>
                    </StyledFilter>
                </div>
                <StyledSeparator />
            </StyledCoursesPage>
        </MainBody>
    );
};

export default ArticlesPage;
