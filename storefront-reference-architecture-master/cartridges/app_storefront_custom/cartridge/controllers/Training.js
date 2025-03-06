'use strict';

var server = require('server');
var ProductMgr = require('dw/catalog/ProductMgr');

server.get('Start', function (req, res, next) {
    var product = ProductMgr.getProduct("008884303989M");
    var color = product.custom.color;
    
    res.render('helloworld', {
        color : color,
        product : product
    });

    next();

});


module.exports = server.exports();