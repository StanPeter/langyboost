import React, { useEffect, useState } from "react";
import Button from "components/ui/Button/Button";
import { VscEdit } from "react-icons/vsc";
import styles from "./personalSettingsPage.module.scss";
import globalStyles from "styles/style.module.scss";
import MembershipDialog from "components/others/MembershipDialog/MembershipDialog";
import InputSwitcher from "components/ui/InputSwitcher";
import MainBody from "components/layouts/MainBody/MainBody";

type ModeTypes = "profile" | "settings";

interface PersonalSettingsPageProps {
    routeMode?: ModeTypes;
}

const PersonalSettingsPage: React.FC<PersonalSettingsPageProps> = ({ routeMode }) => {
    const [opacityImg, setOpacityImg] = useState("0.8");
    const [mode, setMode] = useState<ModeTypes>("profile");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (routeMode) setMode(routeMode);
    }, [routeMode]);

    let renderedSection: JSX.Element = (
        <React.Fragment>
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
                <InputSwitcher name="Sex" type="text" />
                <InputSwitcher name="First name" type="text" />
                <InputSwitcher name="Last name" type="text" />
                <InputSwitcher name="E-mail" type="email" />
                <InputSwitcher name="Birthdate" type="date" />
                <InputSwitcher name="Phone number" type="text" />
                <InputSwitcher name="Address" type="text" />
                <InputSwitcher name="Nationality" type="text" />
                <Button text="Save changes" onClick={() => {}} active={true} type="big" />
            </form>
        </React.Fragment>
    );

    if (mode === "settings")
        renderedSection = (
            <React.Fragment>
                <form className={styles.settingsForm} action="">
                    <InputSwitcher
                        name="Sound effects"
                        type="singleselect"
                        typeOfMultiselect="form"
                        dataOfMultiselect={[
                            { text: "Turned off", value: "off" },
                            { text: "Turned on", value: "on" },
                        ]}
                    />
                    <InputSwitcher
                        name="Theme"
                        type="singleselect"
                        typeOfMultiselect="form"
                        dataOfMultiselect={[
                            { text: "Lingo(default)", value: "lingo" },
                            { text: "Dark", value: "dark" },
                            { text: "Halloween", value: "halloween" },
                        ]}
                    />
                    <InputSwitcher
                        name="Membership"
                        type="buttonSelect"
                        valueOfButton="Try now"
                        onClick={() => setShowModal(!showModal)}
                    />
                    <InputSwitcher
                        name="Language"
                        type="singleselect"
                        typeOfMultiselect="form"
                        dataOfMultiselect={[
                            { text: "en", value: "en" },
                            { text: "ge", value: "ge" },
                            { text: "es", value: "es" },
                        ]}
                    />
                    <InputSwitcher name="Password" type="text" />
                    <InputSwitcher name="New password" type="text" />
                    <InputSwitcher
                        name="Repeat new password"
                        styleInput={{ fontSize: "12px" }}
                        type="text"
                    />
                    <InputSwitcher name="Bank details" type="text" />
                    <Button text="Save changes" onClick={() => {}} active={true} type="big" />
                </form>
            </React.Fragment>
        );

    const menuBtnStyle = {
        width: "50%",
        height: "3rem",
        margin: 0,
        padding: 0,
    };

    return (
        <MainBody>
            <div className={styles.personalSettingsPage}>
                <h2 className={globalStyles.header}>Personal Settings</h2>
                <div className={styles.settingsContainer}>
                    <div className={styles.settingsButtons}>
                        <Button
                            text="My profile"
                            active={mode === "profile"}
                            style={{
                                ...menuBtnStyle,
                                borderRadius: "25px 0px 0px 0px",
                            }}
                            type="fullLine"
                            onClick={() => setMode("profile")}
                        />
                        <Button
                            text="My Settings"
                            active={mode === "settings"}
                            style={{
                                ...menuBtnStyle,
                                borderRadius: "0 25px 0px 0px",
                            }}
                            type="fullLine"
                            onClick={() => setMode("settings")}
                        />
                    </div>
                    {renderedSection}
                </div>
            </div>
            {showModal && mode === "settings" ? (
                <MembershipDialog hideFunction={() => setShowModal(false)} />
            ) : null}
        </MainBody>
    );
};

export default PersonalSettingsPage;
