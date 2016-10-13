# node-cunet
A library for authenticating with CUNET

Example
-------
```javascript
const cunet=require('node-cunet');
cunet.auth('58345678','suP3r5ecre+p@ssw0rD')
.then(result => {
    if(result){
        // auth ok
    }
    else{
        // auth error
    }
})
.catch(e => {
    // api error
});
```
