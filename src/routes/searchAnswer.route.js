const { Router } = require("express");

const { searchAnswer: controller } = require('../controllers');

const { create, getByQuestionId } = controller;
const { token } = require('../middlewares');

const searchAnswer = Router();

searchAnswer
     .get("/:id", [token, getByQuestionId])
     .post("/", [token, create])

module.exports = searchAnswer;