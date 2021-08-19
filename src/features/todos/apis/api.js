import axios from "axios";

 const api = axios.create({
//     baseURL: 'https://611cd5007d273a0017e2f459.mockapi.io/',
     baseURL: 'http://localhost:8090/',
    
});

export default api;