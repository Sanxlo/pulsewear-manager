import type { Request, Response } from "express";
import { orderService } from "../services/orderService";
import type { Order } from "../types/Order";

export const orderController = {
  getAll(req: Request, res: Response) {
    const orders = orderService.getAll();

    return res.status(200).json(orders);
  },

  create(req: Request, res: Response) {
    const { customerName, email, address, phone, total, items } = req.body;

    if (!customerName || !email || !address || !phone || !total) {
      return res.status(400).json({
        message: "Faltan campos obligatorios",
      });
    }

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        message: "El pedido debe incluir al menos un producto",
      });
    }

    const order = orderService.create({
      customerName,
      email,
      address,
      phone,
      total,
      items,
    });

    return res.status(201).json(order);
  },

  updateStatus(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { status } = req.body as { status: Order["status"] };

    const validStatuses: Order["status"][] = [
      "Pendiente",
      "Confirmado",
      "Enviado",
    ];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        message: "Estado de pedido no válido",
      });
    }

    const updatedOrder = orderService.updateStatus(id, status);

    if (!updatedOrder) {
      return res.status(404).json({
        message: "Pedido no encontrado",
      });
    }

    return res.status(200).json(updatedOrder);
  },
  delete(req: Request, res: Response) {
  const id = Number(req.params.id);

  orderService.delete(id);

  return res.status(200).json({
    message: "Pedido eliminado",
  });
},
};