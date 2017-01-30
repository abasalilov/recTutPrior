DROP  DATABASE
IF EXISTS recruiterTutor;
CREATE DATABASE recruiterTutor;
USE recruiterTutor;
                    -- ---
                    -- Globals
                    -- ---
                    -- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
                    -- SET FOREIGN_KEY_CHECKS=0;
                    -- ---
                    -- Table 'User'
                    --
                    -- ---
                    -- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'User'
--
-- ---

DROP TABLE IF EXISTS User;

CREATE TABLE User (
  id INT NOT NULL AUTO_INCREMENT,
  Username varchar(100) NOT NULL,
  password VARCHAR(50) NOT NULL,
  PRIMARY KEY (id, Username)
);

-- ---
-- Table 'lessons'
--
-- ---

DROP TABLE IF EXISTS lessons;

CREATE TABLE lessons (
  lessonID INT NOT NULL AUTO_INCREMENT,
  Title TEXT NOT NULL,
  Summary TEXT(10000) NOT NULL,
  Content TEXT(10000) NOT NULL,
  PRIMARY KEY (lessonID)
);

-- ---
-- Table 'questions'
--
-- ---

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
  questionID INT NOT NULL AUTO_INCREMENT ,
  lessonID VARCHAR(100) NOT NULL,
  QuestionText1 TEXT(10000) NOT NULL,
  QuestionText2 TEXT(10000) NOT NULL,
  QuestionText3 TEXT(10000) NOT NULL,
  PRIMARY KEY (questionID)
);

-- ---
-- Table 'answers'
--
-- ---

DROP TABLE IF EXISTS answers;

CREATE TABLE answers (
  ANSWERid INT NOT NULL AUTO_INCREMENT,
  answerText TEXT(10000) NOT NULL,
  questionID VARCHAR(100) NOT NULL,
  user VARCHAR(100) NOT NULL,
  PRIMARY KEY (ANSWERid)
);

-- ---
-- Table 'studentLesson'
--
-- ---

DROP TABLE IF EXISTS studentLesson;

CREATE TABLE studentLesson (
  id INTEGER NOT NULL AUTO_INCREMENT ,
  userID VARCHAR(100) NOT NULL,
  lessons VARCHAR(1000) NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys
-- ---

-- add constraint twice FOREIGN KEY ( questionID ) references questions(questionID)

-- ALTER TABLE questions ADD FOREIGN KEY (lessonID) REFERENCES lessons (lessonID)
-- ALTER TABLE answers ADD FOREIGN KEY (questionID) REFERENCES questions (questionID);
-- ALTER TABLE answers ADD FOREIGN KEY (user) REFERENCES User (id);
-- ALTER TABLE studentLesson ADD FOREIGN KEY (userID) REFERENCES User (id);
-- ALTER TABLE studentLesson ADD FOREIGN KEY (lessons) REFERENCES lessons (lessonID);

-- -- ---
-- Table Properties
-- ---

-- ALTER TABLE `User` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `lessons` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `questions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `answers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `studentLesson` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `User` (`id`,`Username`,`password`) VALUES
-- ('','','');
-- INSERT INTO `lessons` (`lessonID`,`Title`,`Summary`,`Content`) VALUES
-- ('','','','');
-- INSERT INTO `questions` (`questionID`,`QuestionText`,`lessonID`) VALUES
-- ('','','');
-- INSERT INTO `answers` (`id`,`answerText`,`questionID`,`user`) VALUES
-- ('','','','');
-- INSERT INTO `studentLesson` (`id`,`userID`,`lessons`) VALUES
-- ('','','');
