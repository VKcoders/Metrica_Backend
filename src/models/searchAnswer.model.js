const connection = require('./connection');

module.exports = {
     getByQuestionId: async (questionId, searchId, filter) => {
          if (filter === "all") {
               const queryAnswer = "SELECT answer_collected, unique_id FROM search_answers WHERE question_id = ? AND search_id = ?;";
               const [result] = await connection.execute(queryAnswer, [questionId, searchId]);
     
               if (result.length === 0) return [];
               return result;
          }

          const queryAnswer = "SELECT answer_collected, unique_id FROM search_answers WHERE question_id = ? AND search_id = ?;";
          const [result] = await connection.execute(queryAnswer, [questionId, searchId]);
          
          if (result.length === 0) return [];

          const queryFilter = "SELECT unique_id FROM `search_answers` WHERE section = 'intro' AND answer_collected = ?;";
          const [filterResult] = await connection.execute(queryFilter, [filter]);

          const filterArr = filterResult.reduce((acc, cur) => {
               acc.push(cur.unique_id)
               return acc;
          }, []);

          const resultFiltered = result.reduce((acc, cur) => {
               const check = filterArr.find((filter) => filter === cur.unique_id)

               if (!check) {
                    return acc;
               }

               acc.push(cur);
               return acc;
               return acc;
          }, [])

          return resultFiltered;
     },
     create: async (clientId, blockName, answer, userId, searchId, uniqueId, customFilter) => {
          try {
               // palhativo
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