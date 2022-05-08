const axios = require('axios');
const baseUrl = 'http://localhost:5522';

interface user {
    email: string;
    username: string;
    password: string;
}

export const postUser = async (userData: user) => {
        // await axios.post(`${baseUrl}/users`, userData ,{
        //     headers:{
        //         'Access-Control-Allow-Origin': '*',
        //     }
        // })
        // .then((response: any) =>{
        //     return response
        // })
        // .catch((err: any) => {
        //     return (err.response);
        // })
}

// export const postUser = async (userData: user) => {
//     try {

//         const response = await axios.post(`${baseUrl}/users`, userData ,{
//             headers:{
//                 'Access-Control-Allow-Origin': '*',
//             }
//         })
//         return ({status: 200, body: response.json()});
//     } catch (error) {
//         return ({status:500, body: error});
//     }
// }