import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';
import { getToken } from './token';

const URL = 'https://lab-api-bq.herokuapp.com';

export const createUser = (name, email, password, role) => {
    return fetch(`${URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            role: role,
            restaurant: 'burger heroes',
        })
    });
};

export const logInt = (email, password) => {
    return fetch(`${URL}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
};

export const getProducts = () => {
    return fetch(`${URL}/products`, {
        method: 'GET',
        headers: {
            'Content-Type': 'aplication/json',
            Authorization: getToken('token'),
        }
    });
};

export const createOrder = (data) => {
    return fetch(`${URL}/orders`, {
        method: 'POST',
        header: {
            'Content-Type': 'aplication/json',
            Authorization: getToken('token'),
        },
        body: JSON.stringify(data)
    });
};