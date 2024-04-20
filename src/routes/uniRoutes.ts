import express from "express";
import { validateUni } from "../middleware/validators.js";
import { getUniversityData } from "../controllers/uniController.js"; 

// We will create a router object
const router = express.Router();

// We will create a route for the car data based on the manufacturer name
router.get("/:uni", validateUni, getUniversityData)

// We will export the router
export default router;