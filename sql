

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'User'
-- 
-- ---


DROP TABLE IF EXISTS `User`;
		
CREATE TABLE `User` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Username` MEDIUMTEXT(100) NULL DEFAULT NULL,
  `password` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'lessons'
-- 
-- ---

DROP TABLE IF EXISTS `lessons`;
		
CREATE TABLE `lessons` (
  `lessonID` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Title` MEDIUMTEXT NULL DEFAULT NULL,
  `Summary` MEDIUMTEXT(10000) NULL DEFAULT NULL,
  `Content` MEDIUMTEXT(10000) NULL DEFAULT NULL,
  PRIMARY KEY (`lessonID`)
);

-- ---
-- Table 'questions'
-- 
-- ---

DROP TABLE IF EXISTS `questions`;
		
CREATE TABLE `questions` (
  `questionID` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `QuestionText` MEDIUMTEXT(10000) NULL DEFAULT NULL,
  `lessonID` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`questionID`)
);

-- ---
-- Table 'answers'
-- 
-- ---

DROP TABLE IF EXISTS `answers`;
		
CREATE TABLE `answers` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `answerText` MEDIUMTEXT(10000) NULL DEFAULT NULL,
  `questionID` VARCHAR NULL DEFAULT NULL,
  `user` MEDIUMTEXT(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'studentLesson'
-- 
-- ---

DROP TABLE IF EXISTS `studentLesson`;
		
CREATE TABLE `studentLesson` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `userID` VARCHAR(100) NULL DEFAULT NULL,
  `lessons` VARCHAR(1000) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `questions` ADD FOREIGN KEY (lessonID) REFERENCES `lessons` (`lessonID`);
ALTER TABLE `answers` ADD FOREIGN KEY (questionID) REFERENCES `questions` (`questionID`);
ALTER TABLE `answers` ADD FOREIGN KEY (user) REFERENCES `User` (`id`);
ALTER TABLE `studentLesson` ADD FOREIGN KEY (userID) REFERENCES `User` (`id`);
ALTER TABLE `studentLesson` ADD FOREIGN KEY (lessons) REFERENCES `lessons` (`lessonID`);

-- ---
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