'use strict';

var moment = require('moment');

exports.footer = function (name) {
    return "Copyright" + moment().format('YYYY') + " " + name + "All rights reserved"
};