import { styled } from '@mui/material/styles';
import MainBody from 'components/layouts/MainBody';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';

// Styled container for the entire swipe deck
const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#f5f5f5',
    paddingTop: '2rem',
});

// A wrapper that positions our stack of cards
const CardContainer = styled('div')({
    width: '320px', // Adjust as needed
    height: '500px',
    position: 'relative',
});

// A single card with a set height, background color, and centered content
const Card = styled('div')<{ bgColor: string }>(({ bgColor }) => ({
    width: '100%',
    height: '500px',
    backgroundColor: bgColor,
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    fontSize: '1.5rem',
    fontWeight: 500,
    textAlign: 'center',
    padding: '1rem',
    position: 'absolute',
}));

// A reset button (if you want to bring cards back)
const ResetButton = styled('button')({
    marginTop: '1rem',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
    background: '#555',
    color: '#fff',
    cursor: 'pointer',
});

interface CardData {
    id: number;
    name: string;
    age: number;
    bgColor: string;
}

const initialCards: CardData[] = [
    { id: 1, name: 'Sabrina', age: 23, bgColor: '#ffadad' },
    { id: 2, name: 'Jane', age: 32, bgColor: '#ffd6a5' },
    { id: 3, name: 'Jessica', age: 24, bgColor: '#fdffb6' },
    { id: 4, name: 'Kate', age: 33, bgColor: '#caffbf' },
    { id: 5, name: 'Helen', age: 37, bgColor: '#9bf6ff' },
];

interface CardPageProps {
    data: any;
    // index: number;
    numberOfCards: number;
    setNumberOfCards: React.Dispatch<React.SetStateAction<number>>;
}

const ReactTinderCardsDemo: React.FC<CardPageProps> = ({ data, setNumberOfCards, numberOfCards }) => {
    const [cards, setCards] = useState(initialCards);

    const swiped = (direction: string, nameToDelete: string) => {
        console.log('removing: ' + nameToDelete, 'direction:', direction);
        setCards(prev => prev.filter(card => card.name !== nameToDelete));
    };

    const outOfFrame = (name: string) => {
        console.log(name + ' left the screen!');
    };

    const resetCards = () => {
        setCards(initialCards);
    };

    return (
        <MainBody>
            <Container>
                <h2 style={{ marginBottom: '1rem' }}>Tinder-Like Swipe</h2>
                <CardContainer>
                    {cards.map(card => (
                        <TinderCard
                            key={card.id}
                            onSwipe={dir => swiped(dir, card.name)}
                            onCardLeftScreen={() => outOfFrame(card.name)}
                            preventSwipe={['up', 'down']}
                            swipeRequirementType="position"
                            swipeThreshold={100}
                        >
                            <Card bgColor={card.bgColor}>
                                <div>
                                    <strong>{card.name}</strong>, {card.age}
                                </div>
                            </Card>
                        </TinderCard>
                    ))}
                </CardContainer>
                {cards.length === 0 && (
                    <div style={{ marginTop: '1rem', fontSize: '1rem' }}>No more recommendations</div>
                )}
                <ResetButton onClick={resetCards}>Reset</ResetButton>
            </Container>
        </MainBody>
    );
};

export default ReactTinderCardsDemo;
