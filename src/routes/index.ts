import { Router } from "express";
import apiv1 from "./apiv1";
import todosRouter from "./todos";

const router = Router();

router.use("/", apiv1);
router.use("/todos", todosRouter);

export default router;
