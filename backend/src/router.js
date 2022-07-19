const express = require("express");

const { ItemController, TournamentController, PlayerController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/player", PlayerController.browse);
router.get("/player/:id", PlayerController.read);

router.get("/tournament", TournamentController.browse);
router.get("/tournament/:id", TournamentController.read);
router.delete("/tournament/:id", TournamentController.delete);
router.post("/tournament", TournamentController.add);

module.exports = router;
