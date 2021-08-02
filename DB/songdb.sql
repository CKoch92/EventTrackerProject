-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema songdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `songdb` ;

-- -----------------------------------------------------
-- Schema songdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `songdb` DEFAULT CHARACTER SET utf8 ;
USE `songdb` ;

-- -----------------------------------------------------
-- Table `song`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `song` ;

CREATE TABLE IF NOT EXISTS `song` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `artist` VARCHAR(45) NULL,
  `album` VARCHAR(45) NULL,
  `release_date` DATE NULL,
  `length` DOUBLE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS songuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'songuser'@'localhost' IDENTIFIED BY 'songuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'songuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `song`
-- -----------------------------------------------------
START TRANSACTION;
USE `songdb`;
INSERT INTO `song` (`id`, `title`, `artist`, `album`, `release_date`, `length`) VALUES (1, 'Savage', 'Megan Thee Stallion', 'Suga', '2020-03-06', 2.58);
INSERT INTO `song` (`id`, `title`, `artist`, `album`, `release_date`, `length`) VALUES (2, 'Waltz of the Flowers', 'Pyotr Ilyich Tchaichovsky', 'The Nutracker Suite', '1982-12-08', 7.07);
INSERT INTO `song` (`id`, `title`, `artist`, `album`, `release_date`, `length`) VALUES (3, 'Island in the Sun', 'Weezer', 'Weezer (Green)', '2001-08-21', 3.34);
INSERT INTO `song` (`id`, `title`, `artist`, `album`, `release_date`, `length`) VALUES (4, 'Hey Ya!', 'OutKast', 'Speakerboxxx/The Love Below', '2003-08-23', 3.92);
INSERT INTO `song` (`id`, `title`, `artist`, `album`, `release_date`, `length`) VALUES (5, 'Smooth Criminal', 'Michael Jackson', 'Bad', '1988-11-14', 4.28);
INSERT INTO `song` (`id`, `title`, `artist`, `album`, `release_date`, `length`) VALUES (6, 'Welcome to Paradise', 'Green Day', 'Dookie', '1994-02-01', 3.73);
INSERT INTO `song` (`id`, `title`, `artist`, `album`, `release_date`, `length`) VALUES (7, 'While My Guitar Gently Weeps', 'The Beatles', 'The Beatles (white album)', '1968-11-22', 4.77);
INSERT INTO `song` (`id`, `title`, `artist`, `album`, `release_date`, `length`) VALUES (8, 'Thunderstruck', 'AC/DC', 'The Razor\'s Edge', '1990-09-10', 4.87);
INSERT INTO `song` (`id`, `title`, `artist`, `album`, `release_date`, `length`) VALUES (9, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `song` (`id`, `title`, `artist`, `album`, `release_date`, `length`) VALUES (10, NULL, NULL, NULL, NULL, NULL);

COMMIT;

