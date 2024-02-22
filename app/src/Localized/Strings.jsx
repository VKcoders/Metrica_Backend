const strings = {
     // Stack Screen
     Cover: {
          title: "Instituto ATESP",
          subtitle: "Análise e Pesquisa de Dados",
          continue: ["Continuar", "Continue Icon"]
     },
     Login: {
          username: ["Usuário", "digite seu usuário"],
          password: ["Senha", "digite sua senha"],
          submitBtn: "Entrar"
     },
     // Tab Screen
     Historic: {
          noHistory: "Entrevistador(a) sem histórico"
     },
     Remainder: {
          new: "Criar um lembrete",
          add: "Adicionar mais um lembrete",
          remove: "Remover Lembrete",
          edit: "Editar lembrete"
     },
     Announcement: {
          noAnnouncement: "Sem avisos até o momento..."
     },
     Report: {
          new: "Criar uma ocorrência",
          add: "Adicionar mais um ocorrência",
          remove: "Remover ocorrência",
          edit: "Editar ocorrência"
     },
     Home: {
          component: {
               greeetings: (name) => `Olá ${name}!`,
               status: (num) => `${num.length == 1 ? "0" + num : num} pesquisa(s) pendentes.`,
               region: (where) => `Região: ${where}`,
               completion: (d, t, p) => `Status: ${d} / ${t} (${p}%)` 
          }
     }
};

module.exports = strings;
