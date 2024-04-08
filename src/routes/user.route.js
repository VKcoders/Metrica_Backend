const { Router } = require("express");

const { user: controller } = require('../controllers');

const { getById, getProgressBySearch } = controller;
const { token } = require('../middlewares');

const user = Router();

user
     .get("/:id", [token, getById])
     .get("/progress/:id", [token, getProgressBySearch])

module.exports = user;