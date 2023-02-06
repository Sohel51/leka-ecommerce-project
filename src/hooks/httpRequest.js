
let headers = {}
const token = window.localStorage.getItem('token');

if (token) {
    headers.Authorization = 'Bearer ' + token;
}

let urlBase = process.env.REACT_APP_SERVER_URL;
let mode = process.env.REACT_APP_MODE

if (mode === "production") {
    urlBase = process.env.REACT_APP_LIVE_API_SERVER_URL;
    console.log(urlBase)
}


const httpRequest = async (url, method = "GET", body, header = null) => {
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