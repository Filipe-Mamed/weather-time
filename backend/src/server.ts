import express from "express"
import dotenv from "dotenv";
import chalk from "chalk"
import routes from "./routes/routes.js"
import cors from "cors"

// Configuração de variáveis de ambientes
dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

// Configuração do .json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Rotas
app.use(routes)


const port = process.env.PORT

app.listen(port, () => {
  console.log(chalk.green(`🚀 Servidor rodando em http://localhost:${port}`));
});