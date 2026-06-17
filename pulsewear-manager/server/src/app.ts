import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "PulseWear API funcionando correctamente",
  });
});

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/orders", orderRoutes);

export default app;