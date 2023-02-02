const UseLocalStorageSet = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
}

export default UseLocalStorageSet