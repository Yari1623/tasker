import express from "express";

import dotenv from "dotenv";

import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

import authRoutes from './routes/auth.routes.js'

dotenv.config();

const app = express();

app.use(express.json())

app.use(cors());
//routes app

//auth
app.use('/api/auth' , authRoutes)

//route front
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, "../../frontend")));

app.get("/authenticate", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/html/authenticate.html"));
});

app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/html/dashboard.html"));
});

app.get("/formulaire", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/html/formulaire.html"));
});



export default app;
