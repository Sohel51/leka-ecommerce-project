
let headers = {}
const token = window.localStorage.getItem('token');

if (token) {
    headers.Authorization = 'Bearer ' + token;
}

const urlBase = process.env.REACT_APP_SERVER_URL;

const httpRequest = async (url, method="GET", body, header = null) => {
    if (header) {
        headers = { ...headers, ...header }
    }
    const request = await fetch(`${urlBase}${url}`, {
        method,
        headers,
        body
    });

    let response = {};
    response.data = await request.json();
    response.status = await request.status;
    return response
}

export default httpRequest;