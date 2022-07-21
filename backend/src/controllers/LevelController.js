const models = require("../models");

class LevelController {
  static browse = (req, res) => {
    models.level
      .findAll()
      .then(([level]) => {
        if (level[0]) {
          res.status(200).json(level);
        } else {
          res.status(400).send("No level found");
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.level
      .find(req.params.id)
      .then(([level]) => {
        if (level[0] == null) {
          res.status(404).send("No level found");
        } else {
          res.status(200).json(level[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const level = req.body;

    // TODO validations (length, format...)

    level.id = parseInt(req.params.id, 10);

    models.level
      .update(level)
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
    const level = req.body;

    // TODO validations (length, format...)

    models.level
      .insert(level)
      .then(([result]) => {
        res.status(201).send({ ...level, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.level
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

module.exports = LevelController;
