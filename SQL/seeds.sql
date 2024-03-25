USE u954605081_pesquisa;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO users (user, name, password) VALUES
    ("vincenzofdg", "Vincenzo", "b9t5qrpj5"),
    ("marcelo", "Marcelo", "marcelo213"),
    ("matheus213", "Matheus", "matheus213"),
    ("metrica", "Cliente", "metrica213"),
    ("store-test", "Store", "store213");

INSERT INTO managers (user, name, password) VALUES
    ("vincenzofdg", "Vincenzo", "b9t5qrpj5"),
    ("marcelo", "Marcelo", "marcelo213"),
    ("matheus213", "Matheus", "matheus213");
    
INSERT INTO answer_types (type) VALUES
    ("text"),
    ("selection_num"),
    ("selection_text");