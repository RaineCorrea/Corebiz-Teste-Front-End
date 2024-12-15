import logo from "/logo-corebiz.svg";
import iconSearch from "/iconShoppingCart.svg";
import styles from "./HeaderMobile.module.css";
import iconShoppingCart from "/iconShoppingCart.svg";
import { MenuMobile } from "../../Menu/MenuMobile/MenuMobile";
import { menuItemsMobile } from "../../../mocks/menuItemsMobile";
import { useCart } from "../../../context/CartContext";

export function HeaderMobile() {
  const { cartCount } = useCart();
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <MenuMobile menuItems={menuItemsMobile} />
          <div className={styles.containerLogo}>
            <img src={logo} alt="Logo Corebiz" />
          </div>
          <div className={styles.containerLinks}>
            <a href="#" className={styles.shoppingBag}>
              <img src={iconShoppingCart} alt="Ícone Meu Carrinho" />
              {cartCount > 0 && (
                <span className={styles.cartCount}>{cartCount}</span>
              )}
            </a>
          </div>
        </div>
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
        <div></div>
      </div>
    </header>
  );
}
