// const express = require(`express`);
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 8080;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send(`Hello from home`);

const handleProfile = (req, res) => res.send(`you are on my profile`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan(`dev`));
app.use(helmet());

app.get(`/`, handleHome);

app.get(`/profile`, handleProfile);

app.listen(PORT, handleListening);
