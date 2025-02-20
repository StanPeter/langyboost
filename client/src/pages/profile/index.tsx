import { styled } from '@mui/material/styles';
import ProfilePicture from 'assets/images/profilePicture.jpg';
import Button from 'components/UI/Button';
import Header from 'components/UI/Header';
import Image from 'components/UI/Image';
import Input from 'components/UI/Input';
import Select from 'components/UI/Select';
import MainBody from 'components/layouts/MainBody';
import MembershipDialog from 'components/pages/profile/MembershipDialog';
import React, { useEffect, useState } from 'react';
import { VscEdit } from 'react-icons/vsc';

/* Styled Components */
const PersonalSettingsPageContainer = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const SettingsContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    border: '2px solid var(--color-dark-accent)',
    backgroundColor: 'var(--color-text-light)',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: '1.5rem',
    marginTop: '2rem',
});

const SettingsButtons = styled('div')({
    display: 'flex',
    width: '100%',
    marginBottom: '3rem',
});

const SettingsImage = styled('div')({
    position: 'relative',
});

const SettingsEditIcon = styled(VscEdit)({
    fontSize: '2.5rem',
    color: 'var(--color-text-light)',
    borderRadius: '100%',
    padding: '0.5rem',
    backgroundColor: 'var(--color-main)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0.7,
    '&:hover': {
        opacity: 1,
    },
});

const SettingsForm = styled('form')({
    width: '100%',
    padding: '3rem 7%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const BtnMenu = styled('button')({
    width: '50%',
    height: '3rem',
    margin: 0,
    padding: 0,
});

const BtnMenuLeft = styled(BtnMenu)({
    borderRadius: '1.5rem 0 0 0 !important',
});

const BtnMenuRight = styled(BtnMenu)({
    borderRadius: '0 1.5rem 0 0 !important',
});

/* Component */
type ModeTypes = 'profile' | 'settings';

interface PersonalSettingsPageProps {
    routeMode?: ModeTypes;
}

const PersonalSettingsPage: React.FC<PersonalSettingsPageProps> = ({ routeMode }) => {
    const [profileImgClass, setProfileImgClass] = useState('opacity: 0.8');
    const [mode, setMode] = useState<ModeTypes>('profile');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (routeMode && routeMode !== mode) setMode(routeMode);
    }, [routeMode, mode]);

    let renderedSection: JSX.Element = (
        <>
            <SettingsImage>
                <Image
                    src={ProfilePicture}
                    alt=""
                    // @ts-ignore
                    sx={{ borderRadius: '50%', width: '20rem', height: '20rem', opacity: 0.8 }}
                />
                <SettingsEditIcon
                    onMouseEnter={() => setProfileImgClass('opacity: 0.5')}
                    onMouseLeave={() => setProfileImgClass('opacity: 0.8')}
                />
            </SettingsImage>
            <SettingsForm>
                <Input text="SEX" type="text" />
                <Input text="FIRST_NAME" type="text" />
                <Input text="LAST_NAME" type="text" />
                <Input text="EMAIL" type="email" />
                <Input text="BIRTHDATE" type="date" />
                <Input text="PHONE_NUMBER" type="text" />
                <Input text="ADDRESS" type="text" />
                <Input text="NATIONALITY" type="text" />
                <Button text="SAVE_CHANGES" onClick={() => {}} active={true} useCase="big" />
            </SettingsForm>
        </>
    );

    if (mode === 'settings') {
        renderedSection = (
            <>
                <SettingsForm>
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
                    <p>Membership</p>
                    <Button text="TRY_NOW" type="button" onClick={() => setShowModal(!showModal)} />
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
                </SettingsForm>
            </>
        );
    }

    return (
        <MainBody>
            <PersonalSettingsPageContainer>
                <Header level={1} text="PERSONAL_SETTINGS" />
                <SettingsContainer>
                    <SettingsButtons>
                        <Button
                            text="MY_PROFILE"
                            active={mode === 'profile'}
                            // @ts-ignore
                            classes={BtnMenuLeft}
                            useCase="fullLine"
                            onClick={() => setMode('profile')}
                        />
                        <Button
                            text="MY_SETTINGS"
                            // @ts-ignore
                            classes={BtnMenuRight}
                            active={mode === 'settings'}
                            useCase="fullLine"
                            onClick={() => setMode('settings')}
                        />
                    </SettingsButtons>
                    {renderedSection}
                </SettingsContainer>
            </PersonalSettingsPageContainer>
            {showModal && mode === 'settings' ? <MembershipDialog hideFunction={() => setShowModal(false)} /> : null}
        </MainBody>
    );
};

export default PersonalSettingsPage;
