module.exports = {
    development:{
        db     : 'mongodb://127.0.0.1:27017/meean-land-dev',
        secret : 'secret',
        port    : 1300,
        mode    : "http",
        clientRoot: '../../../client/mobile/www'
    },
    production:{
        url     : 'mongodb://127.0.0.1:27017/meean-land-prod',
        secret : 'secret',
        port    : 13000,
        mode    : "https", 
        clientRoot: '../../../client/mobile/deploy/build'
    }
    
};