import type { Request, Response } from "express";
import { productService } from "../services/productService";

export const productController = {
  getAll(req: Request, res: Response) {
    const products = productService.getAll();

    return res.status(200).json(products);
  },

  getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const product = productService.getById(id);

    if (!product) {
      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }

    return res.status(200).json(product);
  },
};