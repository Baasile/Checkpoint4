const models = require("../models");

class PlaceController {
  static browse = (req, res) => {
    models.place
      .findAll()
      .then(([place]) => {
        if (place[0]) {
          res.status(200).json(place);
        } else {
          res.status(400).send("No place found");
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.place
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.status(404).send("No place found");
        } else {
          res.status(200).json(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const place = req.body;

    // TODO validations (length, format...)

    place.id = parseInt(req.params.id, 10);

    models.place
      .update(place)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const place = req.body;

    // TODO validations (length, format...)

    models.place
      .insert(place)
      .then(([result]) => {
        res.status(201).send({ ...place, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.place
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = PlaceController;
