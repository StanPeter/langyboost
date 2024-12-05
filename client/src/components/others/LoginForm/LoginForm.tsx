import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/UI/Button/Button';
import Input from 'components/UI/Input/Input';
import Paragraph from 'components/UI/Paragraph';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import globalClasses from 'styles/globalClasses.module.scss';
import { TLoginFormMode, TLoginFormUseCase } from 'ts/types';
import { SING_IN_SCHEMA, SING_UP_SCHEMA } from 'utils/validationSchema';
import Slider from './Slider';

interface IFormData {
    password: string;
    userName: string;
    email: string;
    repeatPassword: string;
}

interface ILoginFormProps {
    useCase: TLoginFormUseCase;
}

// form has two modes, sing in and sign up
const LoginForm: React.FC<ILoginFormProps> = ({ useCase }) => {
    const [mode, setMode] = useState<TLoginFormMode>('singIn');
    const navigate = useNavigate();
    const usedSignHook = mode === 'signUp' ? 'TODO' : 'TODO';
    // const [signMutation, { error, reset, loading }] = usedSignHook();

    // useEffect(() => {
    //     reset();
    // }, [mode, reset]);

    // form handling library react-hook-form with yup validation
    const {
        register,
        formState: { errors },
        getValues,
        watch,
    } = useForm({ resolver: yupResolver(mode === 'singIn' ? SING_IN_SCHEMA : SING_UP_SCHEMA) });

    watch();
    const formValues: IFormData = getValues() as unknown as IFormData;

    // submit handling, calling BE for auth access token
    const onSubmitHandler = (e: SubmitEvent) => {
        e.preventDefault();
        console.log('CLICKED');

        if (!formValues.password || !formValues.email) return;
        if (mode === 'signUp' && (!formValues.userName || !formValues.repeatPassword)) return;

        // const variables = mode === 'signUp' ? formValues : { password: formValues.password, email: formValues.email };
        // signMutation({ variables: formValues }).then(res => {
        //     const userData =
        //         mode === 'signUp'
        //             ? (res as unknown as ISingUpResponse).data.signUp
        //             : (res as unknown as ISingInResponse).data.signIn;

        //     console.log(res, ' res');
        //     console.log(userData, ' userData');

        //     if (userData.accessToken) {
        //         sessionStorage.setItem('oat', userData.accessToken);
        //         navigate('/articles');
        //     }
        //     // if (mode === 'signUp' && res.data)
        // });

        // navigate('/courses');
    };

    // control buttons disability
    const isBtnDisabled = () => {
        if (!formValues.email || !formValues.password) return true;

        if (mode === 'signUp' && (!formValues.repeatPassword || !formValues.userName)) return true;

        return false;
    };

    return (
        <section
            className={
                'z-10 bg-[var(--color-main-light)] border-2 border-[var(--color-dark-accent)] shadow-xl rounded-3xl w-full'
            }
        >
            {useCase === 'landingPage' && <Slider />}
            <div className={'w-full flex'}>
                <Button
                    useCase="fullLine"
                    active={mode === 'singIn'}
                    text="SIGN_IN"
                    classes={`w-1/2 ${useCase === 'authPage' ? 'rounded-tl-3xl mt-0' : ''}`}
                    onClick={() => setMode('singIn')}
                />
                <Button
                    useCase="fullLine"
                    classes={`w-1/2 ${useCase === 'authPage' ? 'rounded-tr-3xl mt-0' : ''}`}
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
                {/* {!loading ? ( */}
                    <Button
                        text={mode === 'singIn' ? 'SIGN_IN' : 'SIGN_UP'}
                        useCase="fullLine"
                        type="submit"
                        onClick={onSubmitHandler}
                        disabled={isBtnDisabled()}
                        classes={'w-full'}
                    />
                {/* ) : (
                    <Spinner useCase="small" />
                )} */}

                {/* {error && (
                    <Header
                        level={4}
                        text={error.message}
                        shouldTranslate={false}
                        classes={`${globalClasses.validationMessage}`}
                    />
                )} */}
            </form>
            <div className={'flex w-full justify-center my-5'}>
                <hr className="w-2/6 max-w-40 m-auto ml-10 mr-5 border-t-1 border-[var(--color-dark-accent)]" />
                <Paragraph text={mode === 'singIn' ? 'OR_SIGN_IN' : 'OR_SIGN_UP'} />
                <hr className="w-2/6 max-w-40 m-auto ml-5 mr-10 border-t-1 border-[var(--color-dark-accent)]" />
            </div>
            <div className={`flex justify-center mb-8`}>
                <FcGoogle className={`${globalClasses.iconSpin} w-8 h-8 mx-2`} />
                <SiFacebook className={`${globalClasses.facebook} ${globalClasses.iconSpin} w-7 h-8 mx-2`} />
            </div>
        </section>
    );
};

export default LoginForm;
