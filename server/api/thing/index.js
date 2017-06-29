'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/:page/:take', controller.index);

module.exports = router;
