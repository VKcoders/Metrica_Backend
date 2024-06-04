const { Router } = require("express");

const { warning: controller } = require('../controllers');

const { getById } = controller;
const { token } = require('../middlewares');

const warning = Router();

warning
     .get("/:id", [token, getById])

module.exports = warning;