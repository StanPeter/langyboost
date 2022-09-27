export interface SectionStyles {
    membership: React.CSSProperties;
    subscription: React.CSSProperties;
    paymendMethod: React.CSSProperties;
    paymentDetails: React.CSSProperties;
}

//UI
export interface Course {
    imgSrc: string;
    value: string;
    cardIndex: number;
    name: string;
    text: string;
}
export interface MultiselectItem {
    imgSrc?: string;
    value: string;
    cardIndex?: number;
    name: string;
    text?: string;
}
