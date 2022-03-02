const express = require("express")
const questionController = require("./controllers/question-controller")

const route = express.Router()

route.get("/", (req, res) => res.render("index"))
route.get("/room", (req, res) => res.render("room"))
route.get("/create-pass", (req, res) => res.render("create-pass"))

route.post("/room/:room/:question/:action", questionController.index)

module.exports = route