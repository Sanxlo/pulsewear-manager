import { Router } from "express";
import { orderController } from "../controllers/orderController";

const router = Router();

router.get("/", orderController.getAll);
router.post("/", orderController.create);
router.patch("/:id/status", orderController.updateStatus);

export default router;
router.delete(
  "/:id",
  orderController.delete
);