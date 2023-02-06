const UseLocalStorageSet = (key, data) => {
    console.log(key, data);
    window.localStorage.setItem(key, JSON.stringify(data));
}

export default UseLocalStorageSet