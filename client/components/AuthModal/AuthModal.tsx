import React, { useCallback, useState } from 'react';
import { LoginContainer } from './styled';
import { FormDialog } from '../Dialog/Dialog';
import { registration, login } from '../../services/api';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AuthModalProps {
    isOpen: boolean;
    setOpen: (state: boolean) => void;
}

export const AuthModal = ({ isOpen, setOpen }: AuthModalProps) => {
    const [signIn, setSignIn] = useState(true);
    const onLogin = useCallback(async data => {
        const responce = await login();
        console.log('responce', responce);
    }, []);

    const onRegistration = useCallback(async (data) => {
        const response = await registration({
            name: data.name,
            login: data.login,
            password: data.password,
        });
        toast("Wow so easy !")
        setSignIn(true);
    }, []);

    const toggleMode = useCallback(() => {
        setSignIn(!signIn)
    }, [signIn]);

    return (
        <FormDialog
            isOpen={isOpen}
            setOpen={setOpen}
            >
                <>
                <LoginContainer>
                {
                    signIn ? 
                        <SignIn onSubmit={onLogin} onToggle={toggleMode}></SignIn>
                        :
                        <SignUp onSubmit={onRegistration} onToggle={toggleMode}></SignUp>
                }
                </LoginContainer>
                <ToastContainer/>
                </>
        </FormDialog>
    )
};
