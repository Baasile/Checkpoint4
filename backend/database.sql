-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema league
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema league
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `league` DEFAULT CHARACTER SET utf8 ;
USE `league` ;

-- -----------------------------------------------------
-- Table `league`.`player`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `league`.`player` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NULL,
  `phone` INT NULL,
  `mail` VARCHAR(155) NULL,
  `profil_picture` VARCHAR(512) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `league`.`tournament`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `league`.`tournament` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `place` VARCHAR(45) NOT NULL,
  `winner` VARCHAR(45) NULL,
  `second` VARCHAR(45) NULL,
  `third` VARCHAR(45) NULL,
  `last` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `league`.`team`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `league`.`team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(155) NULL,
  `player1` VARCHAR(45) NULL,
  `player2` VARCHAR(45) NULL,
  `player3` VARCHAR(45) NULL,
  `player4` VARCHAR(45) NULL,
  `player5` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `league`.`team_has_player`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `league`.`team_has_player` (
  `team_id` INT NOT NULL,
  `player_id` INT NOT NULL,
  PRIMARY KEY (`team_id`, `player_id`),
  INDEX `fk_team_has_player_player1_idx` (`player_id` ASC) VISIBLE,
  INDEX `fk_team_has_player_team_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `fk_team_has_player_team`
    FOREIGN KEY (`team_id`)
    REFERENCES `league`.`team` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_team_has_player_player1`
    FOREIGN KEY (`player_id`)
    REFERENCES `league`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `league`.`tournament_has_team`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `league`.`tournament_has_team` (
  `tournament_id` INT NOT NULL,
  `team_id` INT NOT NULL,
  PRIMARY KEY (`tournament_id`, `team_id`),
  INDEX `fk_tournament_has_team_team1_idx` (`team_id` ASC) VISIBLE,
  INDEX `fk_tournament_has_team_tournament1_idx` (`tournament_id` ASC) VISIBLE,
  CONSTRAINT `fk_tournament_has_team_tournament1`
    FOREIGN KEY (`tournament_id`)
    REFERENCES `league`.`tournament` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tournament_has_team_team1`
    FOREIGN KEY (`team_id`)
    REFERENCES `league`.`team` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
