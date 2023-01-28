const resourceLink = (link) =>{
    return process.env.REACT_APP_SERVER_URL+'/'+link;
}

export default resourceLink