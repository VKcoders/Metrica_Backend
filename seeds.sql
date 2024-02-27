USE u954605081_pesquisa;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO users (user, name, password) VALUES
    ("vincenzofdg", "Vincenzo", "b9t5qrpj5"),
    ("marcelo", "Marcelo", "marcelo213");
    
INSERT INTO clients (user, name, password) VALUES
    ("Cliente 01", "Nome Cliente 01", "cliente01"),
    ("Cliente 02", "Nome Cliente 02", "cliente02"),
    ("Cliente 03", "Nome Cliente 03", "cliente03");
    
INSERT INTO answer_types (type) VALUES
    ("text"),
    ("selection_index"),
    ("selection_btn");