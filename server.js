//[ Sprint 01 -- base ] Express e ES modules -- mantido da primeira aula
import express from "express";

//[ Sprint 04 -- Herdado] recebimento de dados por POST
//recebe JSON do navegador ou de um cliente HTTP
import { lerMensagens, salvarMensagens } from "./store.js";

const app = express();
const PORT = 3000;

