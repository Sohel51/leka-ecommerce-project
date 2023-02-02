const UseLocalStorageGet = (key) => {
    return  JSON.parse (window.localStorage.getItem(key));
}

export default UseLocalStorageGet