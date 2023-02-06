const resourceLink = (link) =>{
    return process.env.REACT_APP_LIVE_API_SERVER_URL+'/'+link;
}

export default resourceLink