const express = require("express");
const app = express();
module.exports = app;

const tramAPI = require("./api-generator");

const getAllTrams = (req, res) => {
  res.status(200).json({
    status: "success",
    results: tramAPI.length,
    data: {
      trams: tramAPI
    }
  });
};

app.get("/api/all", getAllTrams);
