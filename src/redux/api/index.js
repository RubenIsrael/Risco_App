import axios from 'axios';

const baseURL = 'http://risco.danthoppruebas.com/api/';

export default ( url, method, headers, data ) => 
    axios({
        baseURL,
        url,
        method,
        headers,
        data
    }); 