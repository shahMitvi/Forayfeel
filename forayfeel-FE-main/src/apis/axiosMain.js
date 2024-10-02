import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

api.interceptors.request.use(
    (config) => {
        // Add authentication token to headers

        const user = localStorage.getItem('user') || null;
        if (user) {
            config.headers['x-access-token'] = JSON.parse(user)['accessToken'];
        }

        return config;
    },
    (error) => {
        // Handle request error
        console.log("error", error)
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // Handle successful response
        return response;
    },
    (error) => {
        console.log(error)
        if (error.response.status == 401) {
            localStorage.clear()
        }
        // Handle response error
        return Promise.reject(error);
    }
);

export default api;
