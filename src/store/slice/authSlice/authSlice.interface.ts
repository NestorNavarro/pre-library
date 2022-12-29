export interface IAuthSlice {
    token: string;
    loggedIn: boolean;
    user: {
        _id: string;
        name: string;
        email: string;
        role: string;
    };
}
