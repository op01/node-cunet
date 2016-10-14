'use strict';
const axios=require('axios');
const https=require('https');
const SMTPConnection = require('smtp-connection');
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
    })
    .catch(error=>{
        let connection = new SMTPConnection({
            host:'webmail.student.chula.ac.th'
        });
        return new Promise(function(resolve, reject) {
            connection.on('error',e=>reject(e));
            connection.connect( ()=>{
                connection.login({
                    user:user,
                    pass:pass
                }, e=>{
                    connection.close();
                    if(e){
                        resolve(false);
                    }
                    else{
                        resolve(true);
                    }
                });
            });
        });
    });
}
