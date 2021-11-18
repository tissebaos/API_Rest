const express = require("express");
const commentCtrl = require("../controllers/commentController.js");
const auth = require("../middleware/auth.jwt");
const router = express.Router();
const multer = require("../middleware/multer-config");

/**
 * @description création de commentaire
 */
router.post("/comment/:messageId", auth, multer, commentCtrl.createComment);

/**
 * @description Lister tous les commentaires d'un post
 */
router.get("/comment/", auth, commentCtrl.getAllComments);

/**
 * @description Mise a jour d'un commentaire (par l'auteur du commentaire)
 */
router.put("/comment/:id", auth, multer, commentCtrl.updateComment);

/**
 * @description Suppression d'un commentaire (par l'auteur du commentaire ou l'administrateur)
 */
router.delete("/comment/:id", auth, commentCtrl.deleteComment);

module.exports = router;