const express = require("express");
const category = require("../controllers/category");
const router = express.Router();
const auth = require("../middlewares/auth")
router.use(auth)

// Route Auth

router.post("/",  category.createCategory)
router.get('/', category.getCategory)
router.get("/:id", category.getCategoryById)
router.put('/:id', category.editCategory)
router.delete('/:id', category.deleteCategory)

module.exports = router