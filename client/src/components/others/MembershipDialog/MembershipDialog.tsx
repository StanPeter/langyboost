import Dialog from "components/ui/Modal/Dialog";
import React, { useState } from "react";
import styles from "./membershipDialog.module.scss";
import Button from "components/ui/Button/Button";
import Input from "components/ui/Input/Input";
import MembershipSection from "./MembershipSection/MembershipSection";
import { SettingsSection } from "utils/types";

type MembershipDialogProps = {
    hideFunction: () => void;
};

const MembershipDialog: React.FC<MembershipDialogProps> = ({ hideFunction }) => {
    const [showedSection, setShowedSection] = useState<SettingsSection>("membership");
    const [membership, setMembership] = useState<"peon" | "king" | null>(null);

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

    const activeSectionStyle = {
        opacity: 1,
        visibility: "unset",
        height: "auto",
    };

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

            <section>
                <Input
                    name="Period"
                    type="multiselect"
                    typeOfMultiselect="form"
                    dataOfMultiselect={[{ text: "Monthly" }, { text: "Yearly" }]}
                />
                <Input
                    name="Repeat payment"
                    type="multiselect"
                    styleInput={{ fontSize: "12px" }}
                    typeOfMultiselect="form"
                    dataOfMultiselect={[{ text: "Yes" }, { text: "No" }]}
                />
            </section>

            <hr className={styles.separator} />
            <h2>Payment method</h2>
            <div>
                <img
                    src="https://www.interest.co.nz/sites/default/files/styles/full_width/public/feature_images/Visa%20logo.png?itok=fytxP3Ee"
                    alt=""
                />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
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
