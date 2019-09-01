const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'http://39.97.33.178',
        changeOrigin:true,

    }));
    app.use(proxy('/node', {
        target : 'http://localhost:3001',
        changeOrigin : true,
    }));
    app.use(proxy('/ajax',{
        target:'http://m.maoyan.com',
        changeOrigin:true,
    }))
};