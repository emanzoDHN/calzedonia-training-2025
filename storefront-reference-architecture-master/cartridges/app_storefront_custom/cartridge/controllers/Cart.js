'use strict';

var server = require('server');
var cart = require('app_storefront_base/cartridge/controllers/Cart');

server.extend(cart);

server.append('Show', function (req, res, next) {

    var viewData = res.getViewData();
    viewData.example = 'One String';
    res.setViewData(viewData);
    return next();

});

module.exports = server.exports();