const express = require("express")
const router = express.Router();
const task = require("../controllers/task")
const auth = require("../middlewares/auth")
router.use(auth)

router.post('/', task.createTask)
router.get("/", task.getTask)
router.get('/category/:id', task.getTasksByCategory)
router.get("/:id", task.getTaskById)
router.delete("/:id", task.deleteTask)
router.put('/:id', task.editTask)

module.exports = router