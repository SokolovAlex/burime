export const genSalt = async () => {
    return '123456';
}

export const hash = async (password: string, salt: string) => {
    return password + salt;
}


export const salt = genSalt();