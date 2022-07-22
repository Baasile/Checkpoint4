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
-- Table `league`.`level`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `league`.`level` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `level` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `league`.`place`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `league`.`place` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `five_center` VARCHAR(155) NOT NULL,
  `city` VARCHAR(155) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `league`.`player`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `league`.`player` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `phone` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `league`.`tournament`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `league`.`tournament` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` VARCHAR(45) NOT NULL,
  `time` VARCHAR(45) NOT NULL,
  `level_id` INT NOT NULL,
  `place_id` INT NOT NULL,
  `player1_id` INT NULL,
  `player2_id` INT NULL,
  `player3_id` INT NULL,
  `player4_id` INT NULL,
  `player5_id` INT NULL,
  `player6_id` INT NULL,
  `player7_id` INT NULL,
  `player8_id` INT NULL,
  `player9_id` INT NULL,
  `player10_id` INT NULL,
  PRIMARY KEY (`id`, `level_id`, `place_id`),
  INDEX `fk_tournament_level1_idx` (`level_id` ASC) VISIBLE,
  INDEX `fk_tournament_place1_idx` (`place_id` ASC) VISIBLE,
  INDEX `fk_tournament_player1_idx` (`player1_id` ASC) VISIBLE,
  INDEX `fk_tournament_player2_idx` (`player2_id` ASC) VISIBLE,
  INDEX `fk_tournament_player3_idx` (`player3_id` ASC) VISIBLE,
  INDEX `fk_tournament_player4_idx` (`player4_id` ASC) VISIBLE,
  INDEX `fk_tournament_player5_idx` (`player5_id` ASC) VISIBLE,
  INDEX `fk_tournament_player6_idx` (`player6_id` ASC) VISIBLE,
  INDEX `fk_tournament_player7_idx` (`player7_id` ASC) VISIBLE,
  INDEX `fk_tournament_player8_idx` (`player8_id` ASC) VISIBLE,
  INDEX `fk_tournament_player9_idx` (`player9_id` ASC) VISIBLE,
  INDEX `fk_tournament_player10_idx` (`player10_id` ASC) VISIBLE,
  CONSTRAINT `fk_tournament_level1`
    FOREIGN KEY (`level_id`)
    REFERENCES `league`.`level` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tournament_place1`
    FOREIGN KEY (`place_id`)
    REFERENCES `league`.`place` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tournament_player1`
    FOREIGN KEY (`player1_id`)
    REFERENCES `league`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tournament_player2`
    FOREIGN KEY (`player2_id`)
    REFERENCES `league`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tournament_player3`
    FOREIGN KEY (`player3_id`)
    REFERENCES `league`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tournament_player4`
    FOREIGN KEY (`player4_id`)
    REFERENCES `league`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tournament_player5`
    FOREIGN KEY (`player5_id`)
    REFERENCES `league`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tournament_player6`
    FOREIGN KEY (`player6_id`)
    REFERENCES `league`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tournament_player7`
    FOREIGN KEY (`player7_id`)
    REFERENCES `league`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tournament_player8`
    FOREIGN KEY (`player8_id`)
    REFERENCES `league`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tournament_player9`
    FOREIGN KEY (`player9_id`)
    REFERENCES `league`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tournament_player10`
    FOREIGN KEY (`player10_id`)
    REFERENCES `league`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
