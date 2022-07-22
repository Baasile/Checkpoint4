const AbstractManager = require("./AbstractManager");

class PlayerManager extends AbstractManager {
  static table = "player";

  insert(player) {
    return this.connection.query(
      `insert into ${PlayerManager.table} (title) values (?)`,
      [player.name]
    );
  }

  update(player) {
    return this.connection.query(
      `update ${PlayerManager.table} set name = ? where id = ?`,
      [player.name, player.id]
    );
  }
}

module.exports = PlayerManager;
