import config from '../config';

const authService = {
    storeAuthToken(token) {
        window.localStorage.setItem(config.TOKEN, token);
    },
    getAuthToken() {
        return window.localStorage.getItem(config.TOKEN);
    },
    deleteAuthToken() {
        window.localStorage.removeItem(config.TOKEN);
    },
    hasAuthToken() {
        return !!authService.getAuthToken();
    },
    makeBasicAuthToken(username, password) {
        return window.btoa(`${username}:${password}`)
    },
}

export default authService;