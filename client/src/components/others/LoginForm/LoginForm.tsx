import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import Button from 'components/UI/Button';
import Input from 'components/UI/Input/Input';
import Paragraph from 'components/UI/Paragraph';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import styled, { css } from 'styled-components';
import { TLoginFormMode, TLoginFormUseCase } from 'ts/types';
import { SING_IN_SCHEMA, SING_UP_SCHEMA } from 'utils/validationSchema';
import Slider from './Slider';

const StyledIconFcGoogle = styled(FcGoogle)`
    width: 20px;
    height: 20px;
    margin: 0.5rem;
`;

const StyledIconSiFacebook = styled(SiFacebook)`
    width: 18px;
    height: 18px;
    margin: 0.5rem;
`;

const StyledWrapper = styled(Box)`
  z-index: 10;
  background-color: #fafbff;
  border: 2px solid #85cdca;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  width: 100%;
`;

const StyledSignInButton = styled(Button)`
    width: 50% !important;
    background-color: red;
    font-size: 50px;
`;

const StyledSignUpButton = styled(Button)<{ $mode: TLoginFormMode }>`
    width: 50%;

    ${({ $mode }) =>
        $mode === 'singIn' &&
        css`
            border-top-left-radius: var(--border-radius-large);
            margin-top: 0;
        `}
`;

const StyledHr = styled('hr')`
    margin: auto;
    width: 100px;
    margin-left: 10px;
    margin-right: 5px;
    border-top: 1px solid #85cdca;
`;

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
    const router = useRouter();
    const usedSignHook = mode === 'signUp' ? 'TODO' : 'TODO';
    // const [signMutation, { error, reset, loading }] = usedSignHook();

    // const { mutate, data } = useMutation('usersLogin');
    // useEffect(() => {
    //     reset();
    // }, [mode, reset]);
    // form handling library react-hook-form with yup validation
    const {
        register,
        formState: { errors },
        getValues,
        watch,
    } = useForm({
        resolver: yupResolver(mode === 'singIn' ? SING_IN_SCHEMA : SING_UP_SCHEMA),
    });
    watch();
    const formValues: IFormData = getValues() as unknown as IFormData;

    // submit handling, calling BE for auth access token
    const onSubmitHandler = (e: any) => {
        e.preventDefault();
        console.log('CLICKED');

        if (!formValues.password || !formValues.email) return;
        if (mode === 'signUp' && (!formValues.userName || !formValues.repeatPassword)) return;

        if (mode === 'singIn') {
            // mutate(formValues);
        } else {
            // mutate(formValues);
        }

        router.push('/courses');
    };

    // control buttons disability

    const isBtnDisabled = () => {
        if (!formValues.email || !formValues.password) return true;

        if (mode === 'signUp' && (!formValues.repeatPassword || !formValues.userName)) return true;

        return false;
    };

    return (
        <StyledWrapper as="section">
            {useCase === 'landingPage' && <Slider />}
            <Box width={'100%'} display={'flex'}>
                <StyledSignInButton
                    $mode={mode}
                    useCase="fullLine"
                    active={mode === 'singIn'}
                    text="SIGN_IN"
                    onClick={() => setMode('singIn')}
                />
                <StyledSignUpButton
                    $mode={mode}
                    useCase="fullLine"
                    active={mode === 'signUp'}
                    text="SIGN_UP"
                    onClick={() => setMode('signUp')}
                />
            </Box>
            <form autoComplete="off">
                <Input
                    withoutLabel
                    type="text"
                    register={register('email')}
                    placeholder="email"
                    validationMessage={errors.email?.message?.toString()}
                />
                <Input
                    withoutLabel
                    type="text"
                    register={register('email')}
                    placeholder="email"
                    validationMessage={errors.email?.message?.toString()}
                />
                {mode === 'signUp' && (
                    <Input withoutLabel type="text" register={register('userName')} placeholder="userName" />
                )}
                <Input withoutLabel type="password" register={register('password')} placeholder="password" />
                {mode === 'signUp' && (
                    <Input
                        withoutLabel
                        type="password"
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
            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} width={'100%'} margin={'0 1rem'} >
                <StyledHr />
                <Paragraph text={mode === 'singIn' ? 'OR_SIGN_IN' : 'OR_SIGN_UP'} />
                <StyledHr />
            </Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} width={'100%'} margin={'0 1rem'} >
                <StyledIconFcGoogle className={`iconSpin`} />
                <StyledIconSiFacebook className={`facebook iconSpin`} />
            </Box>
        </StyledWrapper>
    );
};

export default LoginForm;
