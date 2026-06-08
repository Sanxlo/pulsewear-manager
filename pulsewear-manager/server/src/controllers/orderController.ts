import type { Request, Response } from "express";
import { orderService } from "../services/orderService";
import type { Order } from "../types/Order";

export const orderController = {
  getAll(req: Request, res: Response) {
    const orders = orderService.getAll();

    return res.status(200).json(orders);
  },

  create(req: Request, res: Response) {
    const { customerName, email, address, phone, total } = req.body;

    if (!customerName || !email || !address || !phone || !total) {
      return res.status(400).json({
        message: "Faltan campos obligatorios",
      });
    }

    const order = orderService.create({
      customerName,
      email,
      address,
      phone,
      total,
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
};