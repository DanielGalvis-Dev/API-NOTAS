const express = require("express");
const db = require("./db");
const { auth } = require("./auth");

const router = express.Router();

// Obtener notas
router.get("/", auth, (req, res) => {
  db.all(
    "SELECT * FROM notas WHERE usuario_id = ?",
    [req.userId],
    (err, rows) => res.json(rows)
  );
});

// Crear nota
router.post("/", auth, (req, res) => {
  const { titulo, cuerpo, marca } = req.body;

  db.run(
    "INSERT INTO notas(titulo,cuerpo,marca,usuario_id) VALUES (?,?,?,?)",
    [titulo, cuerpo, marca, req.userId],
    function () {
      res.json({ id: this.lastID });
    }
  );
});

// Actualizar
router.put("/:id", auth, (req, res) => {
  const { titulo, cuerpo, marca } = req.body;

  db.run(
    "UPDATE notas SET titulo=?, cuerpo=?, marca=? WHERE id=? AND usuario_id=?",
    [titulo, cuerpo, marca, req.params.id, req.userId],
    () => res.json({ message: "Actualizada" })
  );
});

// Eliminar
router.delete("/:id", auth, (req, res) => {
  db.run(
    "DELETE FROM notas WHERE id=? AND usuario_id=?",
    [req.params.id, req.userId],
    () => res.json({ message: "Eliminada" })
  );
});

module.exports = router;
