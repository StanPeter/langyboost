import ProfilePicture from 'assets/images/profilePicture.jpg';
import Button from 'components/UI/Button';
import ButtonSelect from 'components/UI/ButtonSelect/ButtonSelect';
import Header from 'components/UI/Header/Header';
import Image from 'components/UI/Image';
import Input from 'components/UI/Input/Input';
import Select from 'components/UI/Select/Select';
import MainBody from 'components/layouts/MainBody/MainBody';
import MembershipDialog from 'components/others/MembershipDialog/MembershipDialog';
import React, { useEffect, useState } from 'react';
import { VscEdit } from 'react-icons/vsc';
import styles from './personalSettingsPage.module.scss';

type ModeTypes = 'profile' | 'settings';

interface PersonalSettingsPageProps {
    routeMode?: ModeTypes;
}

const PersonalSettingsPage: React.FC<PersonalSettingsPageProps> = ({ routeMode }) => {
    const [profileImgClass, setProfileImgClass] = useState(styles.imgOpacityLeave);
    const [mode, setMode] = useState<ModeTypes>('profile');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        console.log(routeMode, ' routeMode');
        if (routeMode && routeMode !== mode) setMode(routeMode);
    });

    let renderedSection: JSX.Element = (
        <React.Fragment>
            <div className={styles.settingsImage}>
                <Image src={ProfilePicture} alt="" classes={profileImgClass} />
                <VscEdit
                    onMouseEnter={() => {
                        setProfileImgClass(styles.imgOpacityEnter);
                    }}
                    onMouseLeave={() => {
                        setProfileImgClass(styles.imgOpacityLeave);
                    }}
                    className={styles.settingsEditIcon}
                />
            </div>
            <form className={styles.settingsForm} action="">
                <Input text="SEX" type="text" />
                <Input text="FIRST_NAME" type="text" />
                <Input text="LAST_NAME" type="text" />
                <Input text="EMAIL" type="email" />
                <Input text="BIRTHDATE" type="date" />
                <Input text="PHONE_NUMBER" type="text" />
                <Input text="ADDRESS" type="text" />
                <Input text="NATIONALITY" type="text" />
                <Button text="SAVE_CHANGES" onClick={() => {}} active={true} useCase="big" />
            </form>
        </React.Fragment>
    );

    if (mode === 'settings')
        renderedSection = (
            <React.Fragment>
                <form className={styles.settingsForm} action="">
                    <Select
                        value={[]}
                        onChange={() => {}}
                        text="SOUND_OF_EFFECTS"
                        type="singleselect"
                        useCase="form"
                        data={[
                            { name: 'Turned off', value: 'off' },
                            { name: 'Turned on', value: 'on' },
                        ]}
                    />
                    <Select
                        value={[]}
                        onChange={() => {}}
                        text="THEME"
                        type="singleselect"
                        useCase="form"
                        data={[
                            { name: 'Lingo(default)', value: 'lingo' },
                            { name: 'Dark', value: 'dark' },
                            { name: 'Halloween', value: 'halloween' },
                        ]}
                    />
                    <ButtonSelect
                        text="MEMBERSHIP"
                        type="button"
                        value="TRY_NOW"
                        onClick={() => setShowModal(!showModal)}
                    />
                    <Select
                        value={[]}
                        onChange={() => {}}
                        text="LANGUAGE"
                        type="singleselect"
                        useCase="form"
                        data={[
                            { name: 'en', value: 'en' },
                            { name: 'ge', value: 'ge' },
                            { name: 'es', value: 'es' },
                        ]}
                    />
                    <Input text="PASSWORD" type="text" />
                    <Input text="NEW_PASSWORD" type="text" />
                    <Input text="REPEAT_NEW_PASSWORD" styleInput={{ fontSize: '12px' }} type="text" />
                    <Input text="BANK_DETAILS" type="text" />
                    <Button text="SAVE_CHANGES" onClick={() => {}} active={true} useCase="big" />
                </form>
            </React.Fragment>
        );

    return (
        <MainBody>
            <div className={styles.personalSettingsPage}>
                <Header level={1} text="PERSONAL_SETTINGS" />
                <div className={styles.settingsContainer}>
                    <div className={styles.settingsButtons}>
                        <Button
                            text="MY_PROFILE"
                            active={mode === 'profile'}
                            classes={styles.btnMenuLeft}
                            useCase="fullLine"
                            onClick={() => setMode('profile')}
                        />
                        <Button
                            text="MY_SETTINGS"
                            classes={styles.btnMenuRight}
                            active={mode === 'settings'}
                            useCase="fullLine"
                            onClick={() => setMode('settings')}
                        />
                    </div>
                    {renderedSection}
                </div>
            </div>
            {showModal && mode === 'settings' ? <MembershipDialog hideFunction={() => setShowModal(false)} /> : null}
        </MainBody>
    );
};

export default PersonalSettingsPage;
