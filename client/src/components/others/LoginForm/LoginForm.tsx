import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/UI/Button/Button';
import Header from 'components/UI/Header/Header';
import Input from 'components/UI/Input/Input';
import Paragraph from 'components/UI/Paragraph';
import { useSignInMutation, useSignUpMutation } from 'graphql/generated/graphql';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { SiFacebook } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import globalClasses from 'styles/globalClasses.module.scss';
import { ISingInResponse, ISingUpResponse } from 'ts/api';
import { TLoginFormMode, TLoginFormUseCase } from 'ts/types';
import { SING_IN_SCHEMA, SING_UP_SCHEMA } from 'utils/validationSchema';
import styles from './loginForm.module.scss';

interface IFormData {
    password: string;
    userName?: string;
    email: string;
    repeatPassword?: string;
}

interface ILoginFormProps {
    useCase: TLoginFormUseCase;
}

// form has two modes, sing in and sign up
const LoginForm: React.FC<ILoginFormProps> = ({ useCase }) => {
    const [mode, setMode] = useState<TLoginFormMode>('singIn');
    const navigate = useNavigate();
    const usedSignHook = mode === 'signUp' ? useSignUpMutation : useSignInMutation;
    const [signMutation, { error, reset }] = usedSignHook();

    useEffect(() => {
        reset();
    }, [mode, reset]);

    // form handling library react-hook-form with yup validation
    const {
        register,
        formState: { errors },
        getValues,
        watch,
        handleSubmit,
    } = useForm({ resolver: yupResolver(mode === 'singIn' ? SING_IN_SCHEMA : SING_UP_SCHEMA) });

    watch();
    const formValues: IFormData = getValues() as unknown as IFormData;

    // submit handling, calling BE for auth access token
    const onSubmitHandler = (e: SubmitEvent) => {
        e.preventDefault();
        console.log('CLICKED');

        if (!formValues.password || !formValues.email) return;
        if (mode === 'signUp' && (!formValues.userName || !formValues.repeatPassword)) return;

        const variables = mode === 'signUp' ? formValues : { password: formValues.password, email: formValues.email };

        signMutation({
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            variables,
        }).then(res => {
            const userData =
                // @ts-ignore
                mode === 'signUp' ? (res as ISingUpResponse).data.signUp : (res as ISingInResponse).data.signIn;

            if (userData.accessToken) {
                sessionStorage.setItem('oat', userData.accessToken);
                navigate('/articles');
            }
            // if (mode === 'signUp' && res.data)
        });

        // navigate('/courses');
    };

    // control buttons disability
    const isBtnDisabled = () => {
        if (!formValues.email || !formValues.password) return true;

        if (mode === 'signUp' && (!formValues.repeatPassword || !formValues.userName)) return true;

        return false;
    };

    return (
        <div className={styles.signForm}>
            {useCase === 'landingPage' && (
                <div className={styles.slider}>
                    <FiArrowLeft className={styles.sliderArrow} />
                    <Header level={2} whiteText text="ULTIMATE_PLATTFORM_TEXT" />
                    <FiArrowRight className={styles.sliderArrow} />
                </div>
            )}
            <div className={styles.switcherWrapper}>
                <Button
                    useCase="fullLine"
                    active={mode === 'singIn'}
                    text="SIGN_IN"
                    classes={`${styles.btn} ${styles.btnLeft} ${
                        useCase === 'authPage' ? styles.authPage : styles.landingPage
                    }`}
                    onClick={() => setMode('singIn')}
                />
                <Button
                    useCase="fullLine"
                    classes={`${styles.btn} ${styles.btnRight} ${
                        useCase === 'authPage' ? styles.authPage : styles.landingPage
                    }`}
                    active={mode === 'signUp'}
                    text="SIGN_UP"
                    onClick={() => setMode('signUp')}
                />
            </div>
            <form autoComplete="off">
                <Input
                    withoutLabel
                    type="text"
                    register={register('email')}
                    placeholder="email"
                    validationMessage={errors.email?.message?.toString()}
                />
                {mode === 'signUp' && (
                    <Input
                        withoutLabel
                        validationMessage={errors.userName?.message?.toString()}
                        type="text"
                        register={register('userName')}
                        placeholder="userName"
                    />
                )}
                <Input
                    withoutLabel
                    type="password"
                    validationMessage={errors.password?.message?.toString()}
                    register={register('password')}
                    placeholder="password"
                />
                {mode === 'signUp' && (
                    <Input
                        withoutLabel
                        type="password"
                        validationMessage={errors.repeatPassword?.message?.toString()}
                        register={register('repeatPassword')}
                        placeholder="repeatPassword"
                    />
                )}
                <Button
                    text={mode === 'singIn' ? 'SIGN_IN' : 'SIGN_UP'}
                    useCase="fullLine"
                    type="submit"
                    onClick={onSubmitHandler}
                    disabled={isBtnDisabled()}
                    classes={styles.submitBtn}
                />
                {error && (
                    <Header
                        level={4}
                        text={error.message}
                        shouldTranslate={false}
                        classes={`${globalClasses.validationMessage}`}
                    />
                )}
            </form>
            <div className={styles.signUpText}>
                <hr />
                <Paragraph text={mode === 'singIn' ? 'OR_SIGN_IN' : 'OR_SIGN_UP'} />
                <hr />
            </div>
            <div className={styles.formIcons}>
                <FcGoogle className={globalClasses.iconSpin} />
                <SiFacebook className={`${globalClasses.facebook} ${globalClasses.iconSpin}`} />
            </div>
        </div>
    );
};

export default LoginForm;
