const router = require("express").Router();
const bookController = require("../Controllers/book");

// Get All Recipe
router.get("/book", bookController._getAllBuku);

module.exports = router;