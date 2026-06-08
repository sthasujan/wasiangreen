import express from "express";

import {
  createEnquiry,
  getEnquiries,
  updateEnquiryStatus,
  deleteEnquiry,
} from "../controllers/enquiryController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// PUBLIC
router.post("/", createEnquiry);

// ADMIN
router.get("/", protect, getEnquiries);

router.put(
  "/:id",
  protect,
  updateEnquiryStatus
);

router.delete(
  "/:id",
  protect,
  deleteEnquiry
);

export default router;