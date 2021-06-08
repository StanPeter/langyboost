import React from "react";
import Card from "components/SingleCard";

interface CardsProps {}

const mockData = [
    {
        text: "Esta frase no es tan buena",
        translation: "Esta frase no es tan buena",
    },
    {
        text: "no es tan buena cómo la última",
        translation: " is not as good as the last",
    },
    {
        text: "Esta frase no es tan buena",
        translation: "Esta frase no es tan buena",
    },
    {
        text: "no es tan buena cómo la última",
        translation: " is not as good as the last one",
    },
    {
        text: "Esta frase no es tan buena",
        translation: "Esta frase no es tan buena",
    },
    {
        text: "no es tan buena cómo la última",
        translation: " is not as good as the last one",
    },
    // {
    //     text: "no es tan buena cómo la última",
    //     translation: " is not as good as the last one",
    // },
    // {
    //     text: "Esta frase no es tan buena",
    //     translation: "Esta frase no es tan buena",
    // },
    // {
    //     text: "no es tan buena cómo la última",
    //     translation: " is not as good as the last one",
    // },
    // {
    //     text: "no es tan buena cómo la última",
    //     translation: " is not as good as the last one",
    // },
    // {
    //     text: "Esta frase no es tan buena",
    //     translation: "Esta frase no es tan buena",
    // },
    // {
    //     text: "no es tan buena cómo la última",
    //     translation: " is not as good as the last one",
    // },
];

const Cards: React.FC<CardsProps> = ({}) => {
    // const [hideTranslation, setHidetranslation] = useState(true);

    // const nextHandler = () => {
    //     setHidetranslation(true);
    // };

    return (
        <div className="card-wrapper">
            {/* <Button onClick={nextHandler} text={"next"} /> */}

            {mockData.map((card, idx: number) => (
                <Card card={card} key={idx} />
            ))}
        </div>
    );
};

export default Cards;
