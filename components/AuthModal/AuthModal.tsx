import React, { useCallback, useState } from 'react';
import { LoginContainer } from './styled';
import { FormDialog } from '../Dialog/Dialog';
import { registration } from '../../services/api';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

interface AuthModalProps {
    isOpen: boolean;
    setOpen: (state: boolean) => void;
}

export const AuthModal = ({ isOpen, setOpen }: AuthModalProps) => {
    const [signIn, setSignIn] = useState(true);
    const onLogin = useCallback(data => {
        console.log('onLogin', data);
    }, []);

    const onRegistration = useCallback((data) => {
        console.log('onRegistration', data);
        registration({
            name: data.name,
            login: data.login,
            password: data.password,
        });
    }, []);

    const toggleMode = useCallback(() => {
        setSignIn(!signIn)
    }, [signIn]);

    return (
        <FormDialog
            isOpen={isOpen}
            setOpen={setOpen}
            >
            <LoginContainer>
            {
                signIn ? 
                    <SignIn onSubmit={onLogin} onToggle={toggleMode}></SignIn>
                    :
                    <SignUp onSubmit={onRegistration} onToggle={toggleMode}></SignUp>
            }
            </LoginContainer>
        </FormDialog>
    )
};
