const authorController = require("../controller/authorController");
const router = require('express').Router();

// Add author 

router.post("/", authorController.addAuthor);

// GET All authors

router.get("/", authorController.getAllAuthors);

// GET AN AUTHOR

router.get("/:id",authorController.getAuthor);

// UPADTE AN AUTHOR

router.put("/:id",authorController.updateAuthor);

// DELETE AN AUTHOR

router.delete("/:id",authorController.deleteAuthor);

module.exports = router;