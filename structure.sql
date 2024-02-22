USE u954605081_pesquisa;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE clients (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  search VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE user_search (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  client_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE user_response (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
--   client_id INT NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (client_id) REFERENCES clients(id)
);
