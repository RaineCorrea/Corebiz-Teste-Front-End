import logo from "/logo-corebiz.svg";
import iconUser from "/iconUser.svg";
import iconSearch from "/iconSearch.svg";
import iconShoppingCart from "/iconShoppingCart.svg";

import styles from "./HeaderDesktop.module.css";
import { useCart } from "../../../context/CartContext";

export function HeaderDesktop() {
  const { cartCount } = useCart();
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.containerLogo}>
          <img src={logo} alt="Logo Corebiz" />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.containerSearch}>
            <form className={styles.containerForm}>
              <input
                type="text"
                placeholder="O Que está procurando?"
                className={styles.inputSearch}
              />
              <button type="submit" className={styles.buttonSearch}>
                <img src={iconSearch} alt="Ícone botão de pesquisa" />
              </button>
            </form>
          </div>
          <div className={styles.containerLinks}>
            <a href="#">
              <img src={iconUser} alt="Ícone Minha Conta" />
              Minha Conta
            </a>
            <a href="#" className={styles.shoppingBag}>
              <img src={iconShoppingCart} alt="Ícone Meu Carrinho" />
              {cartCount > 0 && (
                <span className={styles.cartCount}>{cartCount}</span>
              )}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
