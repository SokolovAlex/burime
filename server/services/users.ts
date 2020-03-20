let activeUsers = {};

export const countUsers = () => Object.keys(activeUsers).length;

export const addUser = (email: string) => {
    if (email) {
        activeUsers[email] = 1;
    }
    return countUsers();
};

export const removeUser = (email: string) => {
    delete activeUsers[email];
    return countUsers();
};