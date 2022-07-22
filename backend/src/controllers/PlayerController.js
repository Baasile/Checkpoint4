const models = require("../models");

class PlayerController {
  static browse = (req, res) => {
    models.player
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.player
      .find(req.params.id)
      .then(([pers]) => {
        if (pers[0] == null) {
          res.status(404).send("Player not found");
        } else {
          models.tournament
            .findById(pers[0].id)
            .then(([tournament]) => {
              const result = {
                ...pers[0],
                tournament,
              };
              res.status(200).json(result);
            })
            .catch((err) => {
              console.error(err);
              res.sendStatus(500);
            });
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const player = req.body;

    player.id = parseInt(req.params.id, 10);

    models.player
      .update(player)
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
    const player = req.body;

    models.player
      .insert(player)
      .then(([result]) => {
        res.status(201).send({ ...player, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.player
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

module.exports = PlayerController;
