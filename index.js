const axios=require('axios');
const https=require('https');
module.exports.auth = function(user,pass){
    return axios.get('https://www.it.chula.ac.th/downloads',{
        auth:{
            username:user,
            password:pass
        },
        httpsAgent:new https.Agent({rejectUnauthorized:false})
    })
    .then(response=>{
        // GGEZ
    })
    .catch(error=>{
        switch (error.response.status) {
            case 401:
                return false;
            case 403:
                return true;
            default:
                return Promise.reject(error);
        }
    });
}
