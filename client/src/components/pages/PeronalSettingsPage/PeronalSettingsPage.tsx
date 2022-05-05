import React, { useState } from "react";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import Button from "components/ui/Button/Button";
import { VscEdit } from "react-icons/vsc";
import styles from "./personalSettingsPage.module.scss";
import globalStyles from "styles/style.scss";

interface PeronalSettingsPageProps {}

const PeronalSettingsPage: React.FC<PeronalSettingsPageProps> = ({}) => {
    const [opacityImg, setOpacityImg] = useState("0.8");

    return (
        <div className={globalStyles.appWrapper}>
            <Navbar />
            <div className={globalStyles.bodyWrapper}>
                <div className={styles.personalSettingsPage}>
                    <h2 className={globalStyles.header}>Personal Settings</h2>
                    <div className={styles.settingsContainer}>
                        <div className={styles.settingsButtons}>
                            <Button
                                text="My profile"
                                style={{
                                    borderRadius: "25px 0px 0px 0px",
                                }}
                                onClick={() => {}}
                            />
                            <Button
                                text="My Settings"
                                active={false}
                                style={{
                                    borderRadius: "0 25px 0px 0px",
                                }}
                                onClick={() => {}}
                            />
                        </div>
                        <div className={styles.settingsImage}>
                            <img
                                src="https://pyxis.nymag.com/v1/imgs/64a/ad3/5896a5cd3008c6fe87b18cc78a99466035-the-witcher-ep-07-placeholder.rsocial.w1200.jpg"
                                alt=""
                                style={{
                                    opacity: opacityImg ? opacityImg : "unset",
                                }}
                            />
                            <VscEdit
                                onMouseEnter={() => {
                                    setOpacityImg("0.5");
                                }}
                                onMouseLeave={() => {
                                    setOpacityImg("0.8");
                                }}
                                className={styles.settingsEditIcon}
                            />
                        </div>
                        <form className={styles.settingsForm} action="">
                            <div className={styles.formItem}>
                                <div className={styles.formLabel}>
                                    <label htmlFor="sex">Sex</label>
                                </div>
                                <input type="text" name="sex" />
                            </div>
                            <div className={styles.formItem}>
                                <div className={styles.formLabel}>
                                    <label htmlFor="firstName">
                                        First name
                                    </label>
                                </div>
                                <input type="text" name="firstName" />
                            </div>
                            <div className={styles.formItem}>
                                <div className={styles.formLabel}>
                                    <label htmlFor="lastName">Last name</label>
                                </div>
                                <input type="text" name="lastName" />
                            </div>
                            <div className={styles.formItem}>
                                <div className={styles.formLabel}>
                                    <label htmlFor="email">E-mail</label>
                                </div>
                                <input type="email" name="email" />
                            </div>
                            <div className={styles.formItem}>
                                <div className={styles.formLabel}>
                                    <label htmlFor="birthDate">Birthdate</label>
                                </div>
                                <input type="date" name="birthDate" />
                            </div>
                            <div className={styles.formItem}>
                                <div className={styles.formLabel}>
                                    <label htmlFor="phoneNumber">
                                        Phone number
                                    </label>
                                </div>
                                <input type="text" name="phoneNumber" />
                            </div>
                            <div className={styles.formItem}>
                                <div className={styles.formLabel}>
                                    <label htmlFor="address">Address</label>
                                </div>
                                <input type="text" name="address" />
                            </div>
                            <div className={styles.formItem}>
                                <div className={styles.formLabel}>
                                    <label htmlFor="nationality">
                                        Nationality
                                    </label>
                                </div>
                                <input type="text" name="nationality" />
                            </div>
                            <button>Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PeronalSettingsPage;
