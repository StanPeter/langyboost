import axios from 'axios';
// import apiPaths from 'settings/apiPaths';

// NOT IMPLEMENTED
/* Method for Login request which will return a TOKEN */
const restoreTokenApi = () => {
    return axios({
        method: 'GET',
        url: 'apiPaths.RESTORE_TOKEN'
    });
};

export default restoreTokenApi;
