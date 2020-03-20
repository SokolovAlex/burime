import React from 'react'
import { InputWrapper, ActionsWrapper } from './styled'
import { SubmitButton } from '../atoms/Button/Button'
import { TextField } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import useForm from 'react-hook-form'

interface SignUpProps {
    onSubmit: (data: any) => void
    onToggle: () => void
}

export const SignUp = ({ onSubmit, onToggle }: SignUpProps) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: 'alex',
            email: 'ierroglif@mail.ru',
            password: '123456',
            password_repeat: '123456',
        },
    })
    return (
        <form onSubmit={handleSubmit(onSubmit)} key="signUp">
            <InputWrapper>
                <TextField
                    fullWidth
                    label="имя"
                    name="name"
                    inputRef={register({ required: true })}
                ></TextField>
            </InputWrapper>
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
                    type="password"
                    name="password"
                    inputRef={register({ required: true, minLength: 6 })}
                ></TextField>
            </InputWrapper>
            <InputWrapper>
                <TextField
                    fullWidth
                    label="повторите пароль"
                    type="password"
                    name="password_repeat"
                    inputRef={register({ required: true, minLength: 6 })}
                ></TextField>
            </InputWrapper>
            <ActionsWrapper>
                <SubmitButton>Зарегистрироваться</SubmitButton>
                <Link component="button" onClick={onToggle}>
                    войти
                </Link>
            </ActionsWrapper>
        </form>
    )
}
