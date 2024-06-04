const connection = require('./connection');

module.exports = {
     getById: async (id) => {
          const query = 'SELECT first, second FROM warnings WHERE id = ?;';
          const [result] = await connection.execute(query, [id]);
          if (result.length === 0) return [];
          return result[0];
     }
};