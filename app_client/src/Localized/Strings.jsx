const strings = {
     Warning: "A entrevista é monitorada em prol da transparência e qualidade da informação.",
     Degrees: ["Péssimo", "Médio", "Ótimo"],
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
               status: (num) => `${num.length == 1 ? "0" + num : num} pesquisa${num > 1 ? "s" : ""} pendente${num > 1 ? "s" : ""}.`,
               noSearch: "Sem pesquisas pendentes",
               region: (where) => `Região: ${where}`,
               completion: (d, t) => `Status: ${d} / ${t}`,
               porcent: (p) => `${p}%`
          }
     },
     btns: {
          confirm: "Concordar",
          next: ""
     },
     Modal: {
          Login: ["Usuário ou Senha inválido.", "Confirmar"],
          RemainderModal: "Criar nota"
     },
     Alerts: {
          RemainderCard: ["Confirmação", "Deseja deletar esta nota?", "Não", "Sim"]
     }
};

module.exports = strings;
