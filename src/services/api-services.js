import config from '../config';

const API_SERVICES = {
    submitPostToAPI:  (bodyObj) => {
        console.log('bodyObj', bodyObj);
        const postObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyObj)
        }
        console.log('postObj', postObj);

        const error = {
            message: ''
        }

        return fetch(`${config.SERVER_URL}/store/add-item`, postObj)
            .then(res => {
                if (!res.ok) {
                    error.message = res.message
                    throw error;
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
            method: 'DELETE'
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