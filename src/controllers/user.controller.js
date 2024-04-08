const { user: service } = require('../services');

module.exports = {
    getById: async (req, res, _next) => {
        const userId = req.params.id;
        const {status, result} = await service.getById(userId);
        return res.status(status).json(result);
    },
    getProgressBySearch: async (req, res, _next) => {
        const searchId = req.params.id;
        const {status, result} = await service.getProgressBySearch(searchId);
        return res.status(status).json(result);
    },
};
