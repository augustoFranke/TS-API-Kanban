import express from "express";
import { handleBoardCreation } from "../controllers/boardController"
import { tokenVerification } from "../middleware/auth";

const boardRouter = express.Router();

boardRouter.post("/", tokenVerification, handleBoardCreation);

export default boardRouter;