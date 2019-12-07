import { UserModel } from './../components/interfaces';
import { createContext, useContext } from 'react';

interface UserContextProps {
    logged: boolean;
    user?: UserModel
}

export const UserContext = createContext<UserContextProps>({
    logged: false,
});

export const useUser = () => {
    return useContext(UserContext).user;
}
