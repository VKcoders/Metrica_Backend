const { searchAnswer: model } = require('../models');

module.exports = {
    getByQuestionId: async (questionId) => {
        const result = await model.getByQuestionId(questionId);
        return {status: 200, result};
    },
    create: async (data) => {
        const { clientId, blockName, answer, userId, searchId, uniqueId, customFilter} = data;
        const result = await model.create(clientId, blockName, answer, userId, searchId, uniqueId, customFilter);
        return {status: 200, result};
    }
};