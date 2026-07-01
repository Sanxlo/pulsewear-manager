import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import MainLayout from "./layouts/MainLayout";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <OrderProvider>
          <MainLayout>
            <AppRouter />
          </MainLayout>
        </OrderProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;