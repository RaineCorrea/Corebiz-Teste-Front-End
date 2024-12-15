import { useState } from "react";
import styles from "./MenuMobile.module.css";
import iconHamburguerMenu from "/iconHamburguerMenu.svg";
import logo from "/logo-corebiz.svg";

interface MenuItem {
  label: string;
  link: string;
  highlight?: boolean;
  iconImg?: string;
}

interface HamburgerMenuProps {
  menuItems: MenuItem[];
}

export function MenuMobile(props: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <button
        className={styles.hamburgerIcon}
        aria-expanded={isOpen ? "true" : "false"}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
      >
        <div>
          <img src={iconHamburguerMenu} alt="Ícone Hamburguer Menu Mobile" />
        </div>
      </button>
      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.containerMenu}>
            <div>
              <img src={logo} alt="Logo Corebiz" />
            </div>
            <button
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Close"
            >
              <span>X</span>
            </button>
          </div>
          {props.menuItems.map((item, index) => (
            <div>
              <a
                key={index}
                href={item.link}
                className={
                  item.highlight ? styles.menuItemHighlight : styles.menuItem
                }
                onClick={toggleMenu}
              >
                {item.iconImg && <img src={item.iconImg} alt={item.label} />}
                {item.label}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
