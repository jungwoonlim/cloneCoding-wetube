// const express = require(`express`);
import express from "express";
const app = express();

const PORT = 8080;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send(`Hello from home`);

const handleProfile = (req, res) => res.send(`you are on my profile`);

app.get(`/`, handleHome);

app.get(`/profile`, handleProfile);

app.listen(PORT, handleListening);
