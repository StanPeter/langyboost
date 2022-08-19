import Dialog from "components/ui/Modal/Dialog";
import React, { useState } from "react";
import styles from "./membershipDialog.module.scss";
import Button from "components/ui/Button/Button";
import Input from "components/ui/Input/Input";
import MembershipSection from "./MembershipSection/MembershipSection";
import { MembershipState, SettingsSection } from "utils/types";
import americanExpress from "images/americanExpress.png";
import visa from "images/visa.png";
import paypal from "images/paypal.png";
import mastercard from "images/mastercard.png";

const btnStyle = {
    width: "338px",
    height: "51px",
    background: "#41B3A3",
    border: "1px solid #85CDCA",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "15px",
    textTransform: "inherit",
    fontSize: "20px",
    margin: 0,
    letterSpacing: "0.1rem",
    marginBottom: "2rem",
};

type MembershipDialogProps = {
    hideFunction: () => void;
};

const MembershipDialog: React.FC<MembershipDialogProps> = ({ hideFunction }) => {
    /* HOOKS */
    const [showedSection, setShowedSection] = useState<SettingsSection>("membership");
    const [membership, setMembership] = useState<MembershipState | null>(null);
    // const [subscription, setSubscription] = useState<SubscriptionState>({
    //     period: null,
    //     repeatPayment: false,
    // });
    // const [activeSectionStyle, setActiveSectionStyle] = useState<React.CSSProperties>({});

    // Handles animation, opacity 1 to show the section, else opacity to zero and after the transition plays, display zero
    // useEffect(() => {
    //     if (showedSection === "membership") setActiveSectionStyle({ opacity: 1 });
    //     else {
    //         setActiveSectionStyle({ opacity: 0 });

    //         setTimeout(() => {
    //             setActiveSectionStyle({ display: "none" });
    //         }, 700);
    //     }
    // }, [showedSection]);

    // /* HANDLERS */
    // const onClickHandler = (e: MouseEvent, type: MembershipState) => {
    //     e.preventDefault();

    //     if (membership === type) setMembership(null);
    //     else {
    //         setMembership(type);

    //         setTimeout(() => {
    //             setShowedSection("subscription");
    //         }, 700);
    //     }
    // };

    const content = (
        <div className={styles.dialog}>
            <section>
                <header className={styles.header}>
                    <h2>
                        Get a membership to finally reach your dreams and learn the desired
                        langauge!
                    </h2>
                </header>
            </section>
            <MembershipSection
                setShowedSection={setShowedSection}
                showedSection={showedSection}
                membership={membership}
                setMembership={setMembership}
            />
            <hr className={styles.separator} />
            <h2>Subscription options</h2>
            <section
                className={showedSection === "subscription" ? styles.activeSection : ""}
                // style={activeSectionStyle}
            >
                <Input
                    name="Period"
                    type="singleselect"
                    typeOfMultiselect="form"
                    dataOfMultiselect={[
                        { text: "Monthly", value: "monthly" },
                        { text: "Yearly", value: "early" },
                    ]}
                />
                <Input
                    name="Repeat payment"
                    type="singleselect"
                    typeOfMultiselect="form"
                    styleInput={{ fontSize: "12px" }}
                    dataOfMultiselect={[
                        { text: "Yes", value: "yes" },
                        { text: "No", value: "no" },
                    ]}
                />
            </section>

            <hr className={styles.separator} />
            <h2>Payment method</h2>
            <div className={styles.paymentMethodsWrapper}>
                <img src={visa} alt="visa" />
                <img src={mastercard} alt="mastercard" />
                <img src={americanExpress} alt="americanExpress" />
                <img src={paypal} alt="paypal" />
            </div>
            <hr className={styles.separator} />
            <h2>Payment details</h2>
            <div className={styles.paymentCardWrapper}>
                <div className={styles.paymentCardDetails}>
                    <p>Nadia Hayden</p>
                    <hr />

                    <div className={styles.flexAlign}>
                        <p>05/2025</p>
                        <div className={`${styles.paymentCardSeparator} ${styles.flexAlign}`}>
                            <img
                                src="https://seeklogo.com/images/V/Visa-logo-C690BE33FD-seeklogo.com.png"
                                alt="visaImg"
                            />
                            <p>1748 4879 8745 7489</p>
                        </div>
                        <p>748</p>
                    </div>
                </div>
            </div>
            <hr className={styles.separator} />
            <Button style={btnStyle} text="Finish payment" onClick={() => {}} />
        </div>
    );

    return <Dialog content={content} hideFunction={hideFunction} />;
};

export default MembershipDialog;
