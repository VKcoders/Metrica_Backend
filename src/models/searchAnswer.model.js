const connection = require('./connection');

module.exports = {
     getByQuestionId: async (questionId, searchId) => {
          const query = "SELECT answer_collected, custom_filter FROM search_answers WHERE question_id = ? AND search_id = ?;";
          const [result] = await connection.execute(query, [questionId, searchId]);
          if (result.length === 0) return [];
          return result;
     },
     create: async (clientId, blockName, answer, userId, searchId, uniqueId, customFilter) => {
          try {
               // plalhativo
               const tempQuery = "SELECT qtd_done FROM user_searches WHERE user_id = ? AND search_id = ?;";
               const [tempQTD] = await connection.execute(tempQuery, [userId, searchId]);
               
               const identiTemp = `${userId}-${tempQTD[0].qtd_done + 1}`;
               //console.log(identiTemp)


               const placeholders = Array(answer.length).fill('(?, ?, ?, ?, ?, ?, ?, ?)').join(', ');

               const query = `
                 INSERT INTO search_answers 
                   (client_id, search_id, question_id, section, answer_collected, user_id, unique_id, custom_filter)
                 VALUES
                   ${placeholders};
               `;
             
               // const values = answer.flatMap(cur => [clientId, searchId, cur.questionId, blockName, cur.text, userId, uniqueId, customFilter]);
               const values = answer.flatMap(cur => [clientId, searchId, cur.questionId, blockName, cur.text, userId, identiTemp, customFilter]);
             
               const [result] = await connection.execute(query, values);

               if (result.affectedRows !== answer.length) {
                    return { msg: "Problems to save search" }
               };

               if (blockName === "question") {
                    const queryStatus = "SELECT qtd_done, qtd_goal FROM user_searches WHERE user_id = ? AND search_id = ?;";
                    const [result] = await connection.execute(queryStatus, [userId, searchId]);
                    
                    const { qtd_goal, qtd_done } = result[0];

                    if (qtd_done >= qtd_goal) return;

                    const updateStatusQuery = "UPDATE user_searches SET qtd_done = ? WHERE user_id = ? AND search_id = ?;";
                    await connection.execute(updateStatusQuery, [qtd_done + 1, userId, searchId]);
               };

                 
               return { msg: "Search Registered" }
             
             } catch (error) {
               console.error("Erro ao executar consulta:", error);
             }
     }
}