const { user: model } = require('../models');

module.exports = {
    getById: async (userId) => {
        const result = await model.getById(userId);
        return {status: 200, result};
    },
    getProgressBySearch: async (searchId) => {
        const result = await model.getProgressBySearch(searchId);
        
        if (result.length === 0) return {status: 200, result};
        
        const formated = result.reduce((acc, cur) => {
            const calc = (cur.done / cur.goal) * 100;
            const progress = Number(calc.toFixed(2))
            return [...acc, {name: cur.name, progress}];
        }, []);
        
        return {status: 200, result: formated};
    },
};