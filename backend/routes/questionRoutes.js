import express from "express";

import {
  createQuestion,
  getQuestions,
  updateQuestionStatus,
  deleteQuestion,
} from "../controllers/questionController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// PUBLIC
router.post("/", createQuestion);

// ADMIN
router.get("/", protect, getQuestions);

router.put(
  "/:id",
  protect,
  updateQuestionStatus
);

router.delete(
  "/:id",
  protect,
  deleteQuestion
);

export default router;