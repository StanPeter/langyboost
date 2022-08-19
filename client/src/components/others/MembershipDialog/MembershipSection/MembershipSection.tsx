import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "../membershipDialog.module.scss";
import peonPoint from "images/peonPoint.png";
import kingPoint from "images/kingPoint.png";
import { SettingsSection } from "utils/types";

type MembershipSectionProps = {
    setMembership: Dispatch<SetStateAction<"king" | "peon" | null>>;
    membership: "king" | "peon" | null;
    showedSection: SettingsSection;
    setShowedSection: Dispatch<SetStateAction<SettingsSection>>;
};

const MembershipSection: React.FC<MembershipSectionProps> = ({
    setMembership,
    membership,
    setShowedSection,
    showedSection,
}) => {
    const activeSectionStyle: React.CSSProperties = {
        opacity: 1,
        visibility: "unset",
        height: "auto",
    };

    return (
        <React.Fragment>
            <section>
                <hr className={styles.separator} />
                <h2>
                    Pick your membership
                    <span className={styles.pickedMembership}>
                        {membership ? ` ${membership}` : ""}
                    </span>
                </h2>

                <div
                    className={`${styles.cards} ${styles.section} ${
                        showedSection === "membership" ? styles.activeSection : ""
                    }`}
                    style={activeSectionStyle}
                >
                    <div
                        onClick={() => {
                            if (membership === "peon") setMembership(null);
                            else {
                                setMembership("peon");
                                setTimeout(() => setShowedSection("subscription"), 500);
                            }
                        }}
                        className={`${styles.cardWrapper} ${
                            membership === "peon" ? `${styles.cardChosen}` : ""
                        }`}
                    >
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
                    <div
                        onClick={() => {
                            if (membership === "king") setMembership(null);
                            else {
                                setMembership("king");
                                setTimeout(() => setShowedSection("subscription"), 500);
                            }
                        }}
                        className={`${styles.cardWrapper} ${
                            membership === "king" ? `${styles.cardChosen}` : ""
                        }`}
                    >
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
            </section>
        </React.Fragment>
    );
};

export default MembershipSection;
