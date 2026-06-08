import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ComparePage from "../pages/ComparePage";
import CheckoutPage from "../pages/CheckoutPage";
import AdminPage from "../pages/AdminPage";
import AdminOrdersPage from "../pages/AdminOrdersPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/orders" element={<AdminOrdersPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}