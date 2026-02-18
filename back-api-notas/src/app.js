const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { router: authRoutes } = require("./auth");
const notasRoutes = require("./notas");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/notas", notasRoutes);

app.get("/", (req, res) => res.send("API Notas funcionando"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
