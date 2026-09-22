const express = require("express");
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const indexRoutes = require("./routes/index");
const resultatRoutes = require("./routes/resultat");

app.use("/", indexRoutes);
app.use("/", resultatRoutes);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});