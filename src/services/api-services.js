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
            .catch(e => console.log(e.message))
    },
    getAllItems: () => {
        return fetch(`${config.SERVER_URL}/store`)
            .then(res => {
                return res.json()
            }).then(json => {
                return json
            })
            .catch(e => console.log(e))
    },
    deleteItemByID: (id) => {
        return fetch(`${config.SERVER_URL}/store/${id}`, {
            method: 'DELETE'
        }).then(res => {
            window.location.href = '/store';
        })
    }

}

export default API_SERVICES;