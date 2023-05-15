const bookController = require("../controller/bookController");
const router = require("express").Router();

// Add Book
router.post("/", bookController.addABook);

// GET ALL BOOKS
router.get("/", bookController.getAllBooks);

// GET BOOK BY ID
router.get("/:id", bookController.getBook);

// UPDATE BOOK
router.put("/:id", bookController.updateBook);

// DELETE AN BOOK
router.delete("/:id", bookController.deleteBook);

module.exports = router;