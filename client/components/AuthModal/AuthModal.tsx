import React, { useCallback, useState } from 'react'
import { LoginContainer } from './styled'
import { FormDialog } from '../Dialog/Dialog'
import { registration, signIn } from '../../services/api/auth'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'
import { success, error } from '../../services/toast'

interface AuthModalProps {
    isOpen: boolean
    setOpen: (state: boolean) => void
}

export const AuthModal = ({ isOpen, setOpen }: AuthModalProps) => {
    const [signInMode, setSignIn] = useState(true)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onLogin = useCallback(async ({ email, password }) => {
        const { status, data } = await signIn({
            email,
            password,
        })
        if (status !== 200) {
            error('Ошибка', data.message)
            return
        }
        document.location.reload(true)
    }, [])

    const onRegistration = useCallback(async ({ name, email, password }) => {
        const { data, status } = await registration({
            name,
            email,
            password,
        })

        if (status !== 200) {
            error('Ошибка', data.message)
            return
        }
        success('Успешно', 'Вы зарегистрированы!')
        setEmail(email)
        setPassword(password)
        setSignIn(true)
    }, [])

    const toggleMode = useCallback(() => {
        setSignIn(!signInMode)
    }, [signInMode])

    return (
        <FormDialog isOpen={isOpen} setOpen={setOpen}>
            <>
                <LoginContainer>
                    {signInMode ? (
                        <SignIn
                            email={email}
                            password={password}
                            onSubmit={onLogin}
                            onToggle={toggleMode}
                        ></SignIn>
                    ) : (
                        <SignUp
                            onSubmit={onRegistration}
                            onToggle={toggleMode}
                        ></SignUp>
                    )}
                </LoginContainer>
            </>
        </FormDialog>
    )
}
