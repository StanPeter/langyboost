import React, { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from "react";
import styles from "../membershipDialog.module.scss";
import peonPoint from "images/peonPoint.png";
import kingPoint from "images/kingPoint.png";
import { MembershipState, SettingsSection } from "utils/types";

const peonText = [
    "Can access all courses",
    "Can review courses",
    "Can access some materials",
    "Can join a club",
];

const kingText = [
    "All privileges as peon",
    "Can create courses",
    "Can access all materials",
    "Can create a club",
];

type MembershipSectionProps = {
    setMembership: Dispatch<SetStateAction<MembershipState | null>>;
    membership: MembershipState | null;
    showedSection: SettingsSection;
    setShowedSection: Dispatch<SetStateAction<SettingsSection>>;
};

const MembershipSection: React.FC<MembershipSectionProps> = ({
    setMembership,
    membership,
    setShowedSection,
    showedSection,
}) => {
    /* HOOKS */
    const [activeSectionStyle, setActiveSectionStyle] = useState<React.CSSProperties>({});

    // Handles animation, opacity 1 to show the section, else opacity to zero and after the transition plays, display zero
    useEffect(() => {
        if (showedSection === "membership") setActiveSectionStyle({ opacity: 1 });
        else {
            setActiveSectionStyle({ opacity: 0 });

            setTimeout(() => {
                setActiveSectionStyle({ display: "none" });
            }, 700);
        }
    }, [showedSection]);

    /* HANDLERS */
    const onClickHandler = (e: MouseEvent, type: MembershipState) => {
        e.preventDefault();

        if (membership === type) setMembership(null);
        else {
            setMembership(type);

            setTimeout(() => {
                setShowedSection("subscription");
            }, 700);
        }
    };

    return (
        <React.Fragment>
            <section>
                <hr className={styles.separator} />
                <h2
                    onClick={() =>
                        setShowedSection(
                            showedSection === "membership" ? "subscription" : "membership"
                        )
                    }
                >
                    Pick your membership
                    <span className={styles.pickedMembership}>
                        {membership ? ` ${membership}` : ""}
                    </span>
                </h2>
                <div
                    className={`${styles.cardsWrapper} ${
                        showedSection === "membership" ? styles.activeSection : ""
                    }`}
                    style={activeSectionStyle}
                >
                    <div
                        onClick={(e) => onClickHandler(e, "peon")}
                        className={`${styles.cardWrapper} ${
                            membership === "peon" ? `${styles.cardChosen}` : ""
                        }`}
                    >
                        <h1>Peon</h1>
                        <hr />
                        <div className={styles.privilegesContainer}>
                            {peonText.map((text, index: number) => (
                                <div className={styles.privilegesWrapper} key={index}>
                                    <img src={peonPoint} alt="peonPoint" />
                                    <p>{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        onClick={(e) => onClickHandler(e, "king")}
                        className={`${styles.cardWrapper} ${
                            membership === "king" ? `${styles.cardChosen}` : ""
                        }`}
                    >
                        <h1>King</h1>
                        <hr />
                        <div className={styles.privilegesContainer}>
                            {kingText.map((text, index: number) => (
                                <div className={styles.privilegesWrapper} key={index}>
                                    <img src={kingPoint} alt="peonPoint" />
                                    <p>{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default MembershipSection;
