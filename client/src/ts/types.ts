import store from 'store';

export const paymentMethodTypes = ['visa', 'mastercard', 'americanExpress', 'paypal'];
export const membershipOTypes = ['king', 'peon'];

export type TStorage = 'localStorage' | 'sessionStorage';
export type TLanguage = 'en' | 'pl' | 'fr';

// loginForm
export type TLoginFormUseCase = 'landingPage' | 'authPage';
export type TLoginFormMode = 'singIn' | 'signUp';

//personalSettingsPage
export type MembershipDialogSectionTypes = 'membership' | 'subscription' | 'paymendMethod' | 'paymentDetails';
export type MembershipTypes = 'king' | 'peon';
export type SubscriptionTypes = {
    period: 'monthly' | 'yearly' | null;
    repeatPayment: 'yes' | 'no';
};
export type PaymentMethodTypes = 'visa' | 'mastercard' | 'americanExpress' | 'paypal';

//UI
export type InputTypes = 'text' | 'email' | 'date' | 'multiselect' | 'buttonSelect' | 'singleselect';
export type TInputUsecase = 'form' | 'filter';
export type TInputType = 'text' | 'date' | 'email' | 'password';

export type TButtonUseCase = 'big' | 'small' | 'middle' | 'fullLine';
export type TSeparatorUseCase = 'fullHorizontal' | 'custom';

export type PaymentDetailsTypes = {
    name: string;
    dateOfExpiration: string;
    cardDetails: string;
    cardSecretNums: string;
};
export type Direction = 'left' | 'right';

// Redux types
export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
