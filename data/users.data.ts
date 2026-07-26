import { ENV } from '../helpers/environment';

export const USERS = Object.freeze({
    ADMIN: {
        username: ENV.auth.username,

        password: ENV.auth.password,
    },

    INVALID: {
        username: ENV.auth.username,

        password: 'invalidpassword',
    },
});
