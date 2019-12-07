export const genSalt = async () => {
    return '123456';
}

export const hash = async (password: string, salt: string) => {
    return password + salt;
}

export const compare = async (hashedPassword: string, password: string) => {
    return await hash(password, await salt) === hashedPassword;
}

export const salt = genSalt();