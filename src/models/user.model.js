const connection = require('./connection');

module.exports = {
   getById: async (userId) => {
      const query = "SELECT search_id as search, qtd_done as done, qtd_goal as goal FROM user_searches WHERE user_id = ?";
      const [result] = await connection.execute(query, [userId]);
      if (result.length === 0) return [];
      return result;
   },
   getProgressBySearch: async (searchId) => {
      const query = `
         SELECT 
            users.name as name,
            qtd_done as done,
            qtd_goal as goal
         FROM user_searches
         INNER JOIN
            users ON user_searches.user_id = users.id
         WHERE search_id = ?
      `;
      const [result] = await connection.execute(query, [searchId]);
      if (result.length === 0) return [];
      return result;
   }
};
