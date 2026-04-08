import express from "express";
import { handleBoardCreation, handleBoardListing } from "../controllers/boardController"
import { tokenVerification } from "../middleware/auth";

const boardRouter = express.Router();

boardRouter.post("/", tokenVerification, handleBoardCreation);
boardRouter.get("/", tokenVerification, handleBoardListing);

export default boardRouter;
