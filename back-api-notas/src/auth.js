const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./db");

const router = express.Router();
const SECRET = process.env.JWT_SECRET;

// Registro
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  db.run(
    "INSERT INTO usuarios(username, password) VALUES (?,?)",
    [username, hash],
    function (err) {
      if (err) return res.status(400).json({ error: "Usuario existe" });
      res.json({ message: "Usuario creado" });
    },
  );
});

// Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.get(
    "SELECT * FROM usuarios WHERE username = ?",
    [username],
    async (err, user) => {
      if (!user) return res.status(401).json({ error: "Credenciales" });

      const ok = await bcrypt.compare(password, user.password);
      if (!ok) return res.status(401).json({ error: "Credenciales" });

      const token = jwt.sign({ id: user.id }, SECRET);
      res.json({ token });
    },
  );
});

// Middleware
function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.sendStatus(401);

  const token = header.split(" ")[1];

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.userId = decoded.id;
    next();
  });
}

module.exports = { router, auth };
