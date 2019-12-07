import React from 'react';
import { InputWrapper, ActionsWrapper, Centered, LightText } from './styled';
import { SubmitButton } from '../Button/Button';
import { TextField } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { FaGoogle } from 'react-icons/fa';
import useForm from 'react-hook-form'

interface SignInProps {
    email?: string;
    password?: string;
    onSubmit: (data: any) => void;
    onToggle: () => void;
}

export const SignIn = ({ onSubmit, onToggle, email, password }: SignInProps) => {
    const { register, handleSubmit } = useForm({
        // defaultValues: {
        //     email,
        //     password,
        // },
        defaultValues: {
            email: 'ierroglif@mail.ru',
            password: '123456',
        },
    });
    return (
        <form onSubmit={handleSubmit(onSubmit)} key='signIn'>
            <Centered>
                <a href='/auth/google'>
                    <FaGoogle size='24'/>
                </a>
            </Centered>
            <Centered><LightText>или</LightText></Centered>
            <InputWrapper>
                <TextField fullWidth label='email' name='email' inputRef={register({ required: true })}></TextField>
            </InputWrapper>
            <InputWrapper>
                <TextField fullWidth label='пароль' name='password' type='password' autoComplete='current-password' inputRef={register({ required: true })}></TextField>
            </InputWrapper>
            <ActionsWrapper>
                <SubmitButton>Войти</SubmitButton>
                <Link
                    component="button"
                    onClick={onToggle}
                >
                    Зарегистрироваться
                </Link>
            </ActionsWrapper>
        </form>
    )
};
