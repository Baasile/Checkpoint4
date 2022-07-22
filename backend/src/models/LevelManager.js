const AbstractManager = require("./AbstractManager");

class LevelManager extends AbstractManager {
  static table = "level";

  insert(level) {
    return this.connection.query(
      `insert into ${LevelManager.table} (title) values (?)`,
      [level.level]
    );
  }

  update(level) {
    return this.connection.query(
      `update ${LevelManager.table} set title = ? where id = ?`,
      [level.level, level.id]
    );
  }
}

module.exports = LevelManager;
