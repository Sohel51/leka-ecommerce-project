const useLocalStorageSet = (data) => {
    window.localStorage.setItem(JSON.stringify(data));
}