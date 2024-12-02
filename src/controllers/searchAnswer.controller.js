const { searchAnswer: service } = require('../services');

module.exports = {
    getByQuestionId: async (req, res, _next) => {
        const questionId = req.params.id;
        const searchId = req.query.searchId;
        const filter = req.query.filter;

        const {status, result} = await service.getByQuestionId(questionId, searchId, filter);
        return res.status(status).json(result);questionId
    },
    create: async (req, res, _next) => {
        const data = req.body;
        const {status, result} = await service.create(data);
        return res.status(status).json(result);
    }
};