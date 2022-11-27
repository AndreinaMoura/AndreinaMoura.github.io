const express = require('express');
const router = express.Router();

// const Carro = require("../controllers/CarrosController");

router.post("/pirateflix", novoFilme);
router.get("/pirateflix/:titulo", buscarAlgo);
router.delete("/pirateflix/:id", excluirFilme);

module.exports = router;