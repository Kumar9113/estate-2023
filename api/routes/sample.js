import express from "express"

const router = express.Router();
router.get("/", (req, res) => {
    res.json({
        message: "Hello mar",
    })
})

export default router;

