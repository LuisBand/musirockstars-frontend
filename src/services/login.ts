import axios from "axios"
const baseUrl = 'http://localhost:5522';

interface loginData{
    email:string,
    password:string
}

export const Login = (data: loginData) => {
    return(axios.post(`${baseUrl}/login`, data ,{
        headers:{
            'Access-Control-Allow-Origin': '*',
        }
    })
    .then(response => {
        return (response);
    })
    .catch((err) => {
        return (err.response);
    }))
}

export default Login;