import authService from './login-token-service';
import config from '../config';

const API_SERVICES = {
    submitPostToAPI:  (bodyObj) => {
        const postObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authService.getAuthToken()}`
            },
            body: JSON.stringify(bodyObj)
        }
        const error = {
            message: ''
        }

        return fetch(`${config.SERVER_URL}/store/add-item`, postObj)
            .then(res => {
                if (!res.ok) {
                    error.message = res.message
                    return error;
                }
                return res
            })
            .catch(e => e);
    },
    getAllItems: () => {
        return fetch(`${config.SERVER_URL}/store`)
            .then(res => {
                return res.json()
            }).then(json => {
                return json
            })
            .catch(e => e);
    },
    deleteItemByID: (id) => {
        return fetch(`${config.SERVER_URL}/store/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${authService.getAuthToken()}`
            }
        }).then(res => {
            window.location.href = '/store';
        })
        .catch(e => e);
    },
    attemptLogin: (bodyObj) => {
        return fetch(`${config.SERVER_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyObj)
        })
        .then(res => {
            if (res.ok) return res.json();
            else {
                return res = {
                    message: 'Username or Password is incorrect',
                    status: 401
                }
            }
        })
        
    }

}

export default API_SERVICES;