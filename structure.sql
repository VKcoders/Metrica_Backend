USE u954605081_pesquisa;

-- SINGULAR
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE clients (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE search_blocks (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- WHITH FOREIGN KEY
CREATE TABLE user_notes (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  note VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE searches (
  id INT NOT NULL AUTO_INCREMENT,
  client_id INT NOT NULL,
  section_01 INT NOT NULL,
  section_02 INT NOT NULL,
  section_03 INT NOT NULL,
  section_04 INT NOT NULL,
  section_05 INT NOT NULL,
  section_06 INT NOT NULL,
  section_07 INT NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (section_01) REFERENCES search_blocks(id),
  FOREIGN KEY (section_02) REFERENCES search_blocks(id),
  FOREIGN KEY (section_03) REFERENCES search_blocks(id),
  FOREIGN KEY (section_04) REFERENCES search_blocks(id),
  FOREIGN KEY (section_05) REFERENCES search_blocks(id),
  FOREIGN KEY (section_06) REFERENCES search_blocks(id),
  FOREIGN KEY (section_07) REFERENCES search_blocks(id),
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE user_search (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  client_id INT NOT NULL,
  search_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (client_id) REFERENCES clients(id),
  FOREIGN KEY (search_id) REFERENCES searches(id)
);

CREATE TABLE search_blocks_content (
  id INT NOT NULL AUTO_INCREMENT,
  search_blocks_id INT NOT NULL,
  question_01 VARCHAR(255) NOT NULL,
  question_02 VARCHAR(255) NOT NULL,
  question_03 VARCHAR(255) NOT NULL,
  question_04 VARCHAR(255) NOT NULL,
  question_05 VARCHAR(255) NOT NULL,
  question_06 VARCHAR(255) NOT NULL,
  question_07 VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (search_blocks_id) REFERENCES search_blocks(id)
);
