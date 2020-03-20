import { UserModel } from '../../models/user';
import { createContext, useContext } from 'react';

interface UserContextProps {
    logged: boolean;
    user?: UserModel;
    setUser: (user: UserModel) => void;
}

export const UserContext = createContext<UserContextProps>({
    logged: false,
    setUser: () => {},
});

export const useUser = () => useContext(UserContext).user as UserModel;

export const useSetUser = () => useContext(UserContext).setUser;

export const useUserContext = () => useContext(UserContext);
