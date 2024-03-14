const router = require("express").Router();
const bookController = require("../Controllers/book");

// Get All Book
router.get("/book", bookController._getAllBuku);

// Get Detail Book
router.get("/book/:id", bookController._getDetailBuku);

// Get New Buku
router.get("/newBook", bookController._getNewBuku);

// Add Buku
router.post(
    "/book",
    bookController._inputValidation,
    bookController._addBuku
);
module.exports = router;