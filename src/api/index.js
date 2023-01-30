import express from "express";
import subscribe from "./subscribe";

const router = express();

router.use("/subscribe", subscribe);

export default router;