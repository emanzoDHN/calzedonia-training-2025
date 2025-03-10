"use strict";

var server = require("server");

server.get("Start", function(req, res, next) {
    var trainingForm = server.forms.getForm("newsletter");
    trainingForm.clear();
    res.render("training/newsletter", {
        trainingForm: trainingForm
    });
    next();
});

server.post("Submit", function(req, res, next) {
    var CustomObjectMgr = require("dw/object/CustomObjectMgr");
    var Transaction = require("dw/system/Transaction");
    var trainingForm = server.forms.getForm("newsletter");

    var email = trainingForm.customer.email.value;
    var object = CustomObjectMgr.getCustomObject("NewsletterSubscription", email);

    if (!object) {
        Transaction.wrap(function() {
            var newObject = CustomObjectMgr.createCustomObject("NewsletterSubscription", email);
            newObject.custom.firstName = trainingForm.customer.firstname.value;
            newObject.custom.lastName = trainingForm.customer.lastname.value;
            newObject.custom.email = trainingForm.customer.email.value;
        });
    }

    var result = {
        firstName: trainingForm.customer.firstname.value,
        lastName: trainingForm.customer.lastname.value,
        email: trainingForm.customer.email.value
    };

    res.setViewData(result);

    res.render("training/newsletter", {
        trainingForm: trainingForm
    });

    return next();
});

module.exports = server.exports();
