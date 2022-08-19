//personalSettingsPage
export type SettingsSection = "membership" | "subscription" | "paymendMethod" | "paymentDetails";
export type MembershipState = "king" | "peon";
export type SubscriptionState = { period: "monthly" | "yearly" | null; repeatPayment: boolean };

//ui
export type InputTypes =
    | "text"
    | "email"
    | "date"
    | "multiselect"
    | "buttonSelect"
    | "singleselect";
