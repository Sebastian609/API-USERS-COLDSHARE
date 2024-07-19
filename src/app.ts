const express = require("express");
const cors = require("cors");
// y así sucesivamente para otros módulos



import users from "./routes/user.routes";
const app = express();

// Middleware para permitir CORS
app.use(cors());

app.use(express.json());


app.use("/api/user", users);

app.listen(3023);
console.log("Server running on port 3023");
