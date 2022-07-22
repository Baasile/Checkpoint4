const AbstractManager = require("./AbstractManager");

class PlaceManager extends AbstractManager {
  static table = "place";

  insert(place) {
    return this.connection.query(
      `insert into ${PlaceManager.table} (title) values (?)`,
      [place.title]
    );
  }

  update(place) {
    return this.connection.query(
      `update ${PlaceManager.table} set title = ? where id = ?`,
      [place.title, place.id]
    );
  }
}

module.exports = PlaceManager;
