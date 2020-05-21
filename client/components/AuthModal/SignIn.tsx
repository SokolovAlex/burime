import React from 'react'
import { InputWrapper, GoogleButton, ActionsWrapper, Centered, LightText } from './styled'
import { SubmitButton } from '../atoms/Button/Button'
import { TextField } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import { FaGoogle } from 'react-icons/fa'
import useForm from 'react-hook-form';
import { baseServerUrl } from '../../config';

interface SignInProps {
    email?: string
    password?: string
    onSubmit: (data: any) => void
    onToggle: () => void
}

export const SignIn = ({
    onSubmit,
    onToggle,
    email,
    password,
}: SignInProps) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email,
            password,
        },
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} key="signIn">
            <Centered>
                <GoogleButton href={`${baseServerUrl}/auth/google`}>
                    <FaGoogle size="24" />
                    <span>Войти</span>
                </GoogleButton>
            </Centered>
            <Centered>
                <LightText>или</LightText>
            </Centered>
            <InputWrapper>
                <TextField
                    fullWidth
                    label="email"
                    name="email"
                    inputRef={register({ required: true })}
                ></TextField>
            </InputWrapper>
            <InputWrapper>
                <TextField
                    fullWidth
                    label="пароль"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    inputRef={register({ required: true })}
                ></TextField>
            </InputWrapper>
            <ActionsWrapper>
                <SubmitButton>Войти</SubmitButton>
                <Link component="button" onClick={onToggle}>
                    Зарегистрироваться
                </Link>
            </ActionsWrapper>
        </form>
    )
}
