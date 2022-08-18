import Dialog from "components/ui/Modal/Dialog";
import React from "react";
import styles from "./membershipDialog.module.scss";
import peonPoint from "images/peonPoint.png";
import kingPoint from "images/kingPoint.png";
import Button from "components/ui/Button/Button";
import Input from "components/ui/Input/Input";

type MembershipDialogProps = {
    hideFunction: () => void;
};

const MembershipDialog: React.FC<MembershipDialogProps> = ({ hideFunction }) => {
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

    const content = (
        <div className={styles.dialog}>
            <header className={styles.header}>
                <h2>
                    Get a membership to finally reach your dreams and learn the desired langauge!
                </h2>
            </header>
            <hr className={styles.separator} />
            <h2>Pick your membership</h2>
            <div className={styles.cards}>
                <div className={styles.cardWrapper}>
                    <h1>Peon</h1>
                    <hr />
                    <div className={styles.privilegesContainer}>
                        <div className={styles.privilegesWrapper}>
                            <img src={peonPoint} alt="peonPoint" />
                            <p>Can access all courses</p>
                        </div>
                        <div className={styles.privilegesWrapper}>
                            <img src={peonPoint} alt="peonPoint" />
                            <p>Can review courses</p>
                        </div>
                        <div className={styles.privilegesWrapper}>
                            <img src={peonPoint} alt="peonPoint" />
                            <p>Can access some materials</p>
                        </div>
                        <div className={styles.privilegesWrapper}>
                            <img src={peonPoint} alt="peonPoint" />
                            <p>Can join a club</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cardWrapper}>
                    <h1>King</h1>
                    <hr />
                    <div className={styles.privilegesContainer}>
                        <div className={styles.privilegesWrapper}>
                            <img src={kingPoint} alt="kingPoint" />
                            <p>All privileges as peon</p>
                        </div>
                        <div className={styles.privilegesWrapper}>
                            <img src={kingPoint} alt="kingPoint" />
                            <p>Can create courses</p>
                        </div>
                        <div className={styles.privilegesWrapper}>
                            <img src={kingPoint} alt="kingPoint" />
                            <p>Can access all materials</p>
                        </div>
                        <div className={styles.privilegesWrapper}>
                            <img src={kingPoint} alt="kingPoint" />
                            <p>Can create a club</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className={styles.separator} />
            <h2>Subscription options</h2>
            <Input
                name="Period"
                type="multiselect"
                typeOfMultiselect="form"
                dataOfMultiselect={[{ text: "Monthly" }, { text: "Yearly" }]}
            />
            <Input
                name="Repeat payment"
                type="multiselect"
                typeOfMultiselect="form"
                dataOfMultiselect={[{ text: "Yes" }, { text: "No" }]}
            />
            <hr className={styles.separator} />
            <h2>Payment method</h2>

            <hr className={styles.separator} />
            <h2>Payment details</h2>
            <div className={styles.paymentDetails}>
                <p>Nadia Hayden</p>
                <div>
                    <p>05/2025</p>
                    <div>
                        <img
                            src="https://toppng.com/uploads/preview/visa-us-vector-logo-free-download-11574017219rwlbxkijxr.png"
                            alt="visaImg"
                        />
                        <p>1748 4879 8745 7489</p>
                    </div>
                    <p>748</p>
                </div>
            </div>
            <hr className={styles.separator} />
            <Button style={btnStyle} text="Finish payment" onClick={() => {}} />
        </div>
    );

    return <Dialog content={content} hideFunction={hideFunction} />;
};

export default MembershipDialog;
