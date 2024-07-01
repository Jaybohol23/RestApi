const express = require("express");
const router = require("./eugene");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json());

app.use(router);

app.get("/", async function (req, res) {
  res.sendFile(path.join(__dirname, "eurix/contact.html"));
});

app.get("/docs", async function (req, res) {
  res.sendFile(path.join(__dirname, "eurix/docs.html"));
});

app.get("/stalk/html", async function (req, res) {
  res.sendFile(path.join(__dirname, "eurix/facebook/stalk.html"));
});

app.get("/temp/html", async function (req, res) {
  res.sendFile(path.join(__dirname, "eurix/tempmail/temp.html"));
});

app.get("/shoti/html", async function (req, res) {
  res.sendFile(path.join(__dirname, "eurix/shoti.html"));
});

app.get("/sim/html", async function (req, res) {
  res.sendFile(path.join(__dirname, "eurix/sim/sim.html"));
});

app.get("/teach/html", async function (req, res) {
  res.sendFile(path.join(__dirname, "eurix/sim/teach.html"));
});

app.get("/pastebin/html", async function (req, res) {
  res.sendFile(path.join(__dirname, "eurix/pastebin/paste.html"));
});

app.get("/tikdl/html", async function (req, res) {
  res.sendFile(path.join(__dirname, "eurix/tiktok/tikdl.html"));
});

app.get("/pinterest/html", async function (req, res) {
  res.sendFile(path.join(__dirname, "eurix/pinterest/pinterest.html"));
});

app.get("/chatgpt/html", async function (req, res) {
  res.sendFile(path.join(__dirname, "eurix/chatgpt/gpt.html"));
});

app.get("*", async function (req, res) {
  res.sendFile(path.join(__dirname, "eurix/404.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
