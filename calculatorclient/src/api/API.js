const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001';

const headers = {
    'Accept': 'application/json'
};

export const doAdd = (payload) =>
    fetch (`${api}/users/doAdd`,
        {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => {
            return res;
    }).catch(error => {
        console.log("Error: "+error);
        return error;
    });

export const doSub = (payload) =>
    fetch (`${api}/users/doSub`,
        {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => {
        return res;
    }).catch(error => {
        console.log("Error: "+error);
        return error;
    });

export const doMul = (payload) =>
    fetch (`${api}/users/doMul`,
        {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => {
        return res;
    }).catch(error => {
        console.log("Error: "+error);
        return error;
    });

export const doDiv = (payload) =>
    fetch (`${api}/users/doDiv`,
        {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => {
        return res;
    }).catch(error => {
        console.log("Error: "+error);
        return error;
    });