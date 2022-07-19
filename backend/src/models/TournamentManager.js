const AbstractManager = require("./AbstractManager");

class TournamentManager extends AbstractManager {
  static table = "tournament";

  insert(tournament) {
    return this.connection.query(
      `insert into ${TournamentManager.table} (title) values (?)`,
      [tournament.name]
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
