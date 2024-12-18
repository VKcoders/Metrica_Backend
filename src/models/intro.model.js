const connection = require('./connection');

module.exports = {
   getById: async (id) => {   
      const numberOfQuestions = async () => {
         const [rows] = await connection.execute("SELECT * FROM introduction_sections WHERE id = ?;", [id]);
         const number = await rows.reduce((acc, cur) => {
            Object.values(cur).forEach(value => {
               if (value !== null) acc++;
            });
            return acc;
         }, -2);
         return number;
      };

      const buldDinamicQuery = async (times) => {
         const renderSelect = Array.from({length: times}).map((_, i) => {
            const number = i + 1 < 10 ? "0" + (i + 1) : i + 1;
            return `
               JSON_OBJECT(
                  'question_id', q${number}.id,
                  'question', q${number}.question,
                  'answer', q${number}.answer,
                  'type', q${number}.answer_type
               ) AS section_${number}
            `;
         });

         const renderInner = Array.from({length: times}).map((_, i) => {
            const number = i + 1 < 10 ? "0" + (i + 1) : i + 1;
            return `
               INNER JOIN 
                  question_blocks q${number} ON introduction_sections.section_${number} = q${number}.id
            `;
         });

         return `
            SELECT
               client_id,
               ${renderSelect.join(',\n')}
            FROM introduction_sections
               ${renderInner.join('\n')}
            WHERE introduction_sections.id = ?;
         `;
      };
      
      try {
         const n = await numberOfQuestions();
         const query = await buldDinamicQuery(n);

         const [result] = await connection.execute(query, [id]);

         return result[0];
      } catch (error) {
         console.error("Erro ao executar consulta:", error);
         return [];
      }
   }
};
