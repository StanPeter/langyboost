export const paymentMethodTypes = ["visa", "mastercard", "americanExpress", "paypal"];
export const membershipOTypes = ["king", "peon"];

//personalSettingsPage
export type MembershipDialogSectionTypes =
    | "membership"
    | "subscription"
    | "paymendMethod"
    | "paymentDetails";
export type MembershipTypes = "king" | "peon";
export type SubscriptionTypes = {
    period: "monthly" | "yearly" | null;
    repeatPayment: "yes" | "no";
};
export type PaymentMethodTypes = "visa" | "mastercard" | "americanExpress" | "paypal";
//ui
export type InputTypes =
    | "text"
    | "email"
    | "date"
    | "multiselect"
    | "buttonSelect"
    | "singleselect";

export type PaymentDetailsTypes = {
    name: string;
    dateOfExpiration: string;
    cardDetails: string;
    cardSecretNums: string;
};
export type Direction = "left" | "right";