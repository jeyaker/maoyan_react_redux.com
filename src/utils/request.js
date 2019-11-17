import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const request = ({
    url,
    method = 'GEt',
    params,
    data,
    headers
}) => {
    return new Promise((resolve, reject) => {
        switch (method.toUpperCase()) {
            case 'POST':
                axios({
                    url,
                    method,
                    data,
                    headers
                }).then(res => resolve(res)).catch(err => reject(err));
                break;

            default:
                // get put delete
                axios({
                    url,
                    method,
                    params,
                    headers
                }).then(res => resolve(res)).catch(err => reject(err));
                break;
        }
    });
}

export default request;