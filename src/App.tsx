import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Menu } from "./components/Menu/Menu";
import { Products } from "./components/Products/Products";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Footer } from "./components/Footer/Footer";

import "./global.css";
import { CartProvider } from "./context/CartContext";

export function App() {
  return (
    <CartProvider>
      <Header />
      <Menu />
      <Banner />
      <Products />
      <Newsletter />
      <Footer />
    </CartProvider>
  );
}
