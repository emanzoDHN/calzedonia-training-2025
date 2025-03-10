'use strict';

var server = require('server');

server.get("Show", function(req, res, next) {
    var URLUtils = require("dw/web/URLUtils");
    var Resource = require("dw/web/Resource");

    var profileForm = server.forms.getForm("training");
    profileForm.clear();

    res.render("trainingform", {
        title: Resource.msg("training.form.title.submit", "forms", null),
        profileForm: profileForm,
        actionUrl: URLUtils.url("Training-SubmitRegistration").toString()
    });

    next();
});

server.post("SubmitRegistration", function(req, res, next) {
        var Resource = require("dw/web/Resource");
        var URLUtils = require("dw/web/URLUtils");
        var profileForm = server.forms.getForm("training");
        res.render("trainingform", {
            title: Resource.msg("training.form.title.edit", "forms", null),
            profileForm: profileForm,
            actionUrl: URLUtils.url("Training-SubmitRegistration").toString()
        });

        next();
    });

module.exports = server.exports();