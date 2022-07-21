const models = require("../models");

class TournamentController {
  static browse = (req, res) => {
    models.tournament
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
    models.tournament
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = async (req, res) => {
    try {
      const object = req.body;

      const presentation = await models.tournament.update(object.id, {
        date: object.date,
        time: object.time,
      });

      const result = await res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static add = async (req, res) => {
    try {
      const tournament = await models.tournament.insert(req.body);
      if (req.body.tournament) {
        await Promise.all(
          req.body.tournament.map((match) =>
            models.tournament.insert({
              ...match,
              tournament_id: tournament[0].insertId,
            })
          )
        );
      }
      res.status(201).send({ ...req.body, id: tournament[0].insertId });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static delete = (req, res) => {
    models.tournament
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

module.exports = TournamentController;
