const AbstractManager = require("./AbstractManager");

class TournamentManager extends AbstractManager {
  static table = "tournament";

  find(id) {
    return this.connection.query(
      `select 
      t.id as tournament_id, 
      t.date, 
      t.time, 
      p.five_center, 
      p.city, 
      l.level, 
      pl.firstname as player1, 
      pl2.firstname as player2, 
      pl3.firstname as player3 
      from  tournament AS t 
      INNER JOIN place AS p ON p.id = t.place_id 
      INNER JOIN level AS l ON l.id = t.level_id 
      INNER JOIN player AS pl ON pl.id = t.player1_id 
      INNER JOIN player AS pl2 ON pl2.id = t.player2_id 
      INNER JOIN player AS pl3 ON pl3.id = t.player3_id 
     where t.id = ?;`,
      [id]
    );
  }

  findAll() {
    return this.connection
      .query(`select t.id, t.date, t.time, p.five_center, p.city, l.level from  ${this.table} AS t 
    INNER JOIN place AS p ON p.id = t.place_id 
    INNER JOIN level AS l ON l.id = t.level_id `);
  }

  findById(id) {
    return this.connection.query(
      `select t.id, t.date, t.time, p.five_center, p.city, l.level from  ${this.table} AS t 
      INNER JOIN place AS p ON p.id = t.place_id 
      INNER JOIN level AS l ON l.id = t.level_id 
     where t.player_id = ?`,
      [id]
    );
  }

  insert(tournament) {
    return this.connection.query(
      `insert into ${TournamentManager.table} (date, time, level_id, place_id) values (?, ?, ?, ?)`,
      [
        tournament.date,
        tournament.time,
        tournament.level_id,
        tournament.place_id,
      ]
    );
  }

  update(tournament) {
    return this.connection.query(
      `update ${TournamentManager.table} set name = ? where id = ?`,
      [tournament.name, tournament.id]
    );
  }
}

module.exports = TournamentManager;
