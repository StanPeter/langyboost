import { yupResolver } from '@hookform/resolvers/yup';
import { Box, styled } from '@mui/material';
import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import Paragraph from 'components/UI/Paragraph';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
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

const StyledWrapper = styled(Box)(({ theme }) => ({
    zIndex: 10,
    backgroundColor: theme.palette.text.secondary,
    border: `2px solid ${theme.palette.secondary.main}`,
    boxShadow: theme.shadows[10],
    borderRadius: '1.5rem',
    width: '100%',
}));

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
                <Button
                    style={{ width: '50% !important' }}
                    useCase="fullLine"
                    active={mode === 'singIn'}
                    text="SIGN_IN"
                    onClick={() => setMode('singIn')}
                />
                <Button
                    useCase="fullLine"
                    style={{ width: '50% !important' }}
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
                    useCase="middle"
                    type="submit"
                    onClick={onSubmitHandler}
                    disabled={isBtnDisabled()}
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
            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} width={'100%'} margin={'0 1rem'}>
                <StyledHr />
                <Paragraph text={mode === 'singIn' ? 'OR_SIGN_IN' : 'OR_SIGN_UP'} />
                <StyledHr />
            </Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} width={'100%'} margin={'0 1rem'}>
                <StyledIconFcGoogle className={`iconSpin`} />
                <StyledIconSiFacebook className={`facebook iconSpin`} />
            </Box>
        </StyledWrapper>
    );
};

export default LoginForm;
