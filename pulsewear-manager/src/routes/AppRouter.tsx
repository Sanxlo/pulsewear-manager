import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(
  () => import("../pages/HomePage")
);

const CatalogPage = lazy(
  () => import("../pages/CatalogPage")
);

const ProductDetailPage = lazy(
  () => import("../pages/ProductDetailPage")
);

const ComparePage = lazy(
  () => import("../pages/ComparePage")
);

const CheckoutPage = lazy(
  () => import("../pages/CheckoutPage")
);

const AdminPage = lazy(
  () => import("../pages/AdminPage")
);

const AdminOrdersPage = lazy(
  () => import("../pages/AdminOrdersPage")
);

const NotFoundPage = lazy(
  () => import("../pages/NotFoundPage")
);

export default function AppRouter() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-xl font-semibold">
            Cargando página...
          </p>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/catalog"
          element={<CatalogPage />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetailPage />}
        />

        <Route
          path="/compare"
          element={<ComparePage />}
        />

        <Route
          path="/checkout"
          element={<CheckoutPage />}
        />

        <Route
          path="/admin"
          element={<AdminPage />}
        />

        <Route
          path="/admin/orders"
          element={<AdminOrdersPage />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </Suspense>
  );
}