//personalSettingsPage
export type SettingsSection = "membership" | "subscription" | "paymendMethod" | "paymentDetails";
export type MembershipState = "king" | "peon";
export type SubscriptionState = {
    period: "monthly" | "yearly" | null;
    repeatPayment: "yes" | "no";
};

//ui
export type InputTypes =
    | "text"
    | "email"
    | "date"
    | "multiselect"
    | "buttonSelect"
    | "singleselect";
