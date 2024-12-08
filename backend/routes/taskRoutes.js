const express = require("express");
const {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask,
} = require("../controllers/taskController");

const router = express.Router();

router.route("/").post(createTask).get(getTasks);
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);

// Create a task
// router.post("/", createTask);

// // Get / read data from the DB
// router.get("/", getTasks);
// router.get("/:id", getTask); //id is params
// router.delete("/:id", deleteTask);
// router.put("/:id", updateTask);
// router.patch("/:id", updateTask);

module.exports = router;
