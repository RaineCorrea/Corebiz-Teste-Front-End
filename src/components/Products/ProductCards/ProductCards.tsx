import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useCart } from "../../../context/CartContext";
import styles from "./ProductCards.module.css";

interface Installment {
  quantity: number;
  value: number;
}

interface IProductCards {
  productId: number;
  imageUrl: string;
  installments: Array<Installment>;
  listPrice: number | null;
  imgProduct: string;
  price: number;
  productName: string;
  stars: number;
}

function renderStars(stars: number) {
  const fullStars = Math.floor(stars);
  const halfStar = stars % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div
      style={{
        display: "flex",
        gap: "2px",
        width: "100%",
        justifyContent: "center",
      }}
    >
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <span key={`full-${index}`}>&#9733;</span>
        ))}
      {halfStar && <span>&#9734;</span>}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <span key={`empty-${index}`}>&#9734;</span>
        ))}
    </div>
  );
}

export function ProductCard({ product }: { product: IProductCards }) {
  const { incrementCart } = useCart();

  return (
    <div className={styles.container}>
      {product.listPrice && (
        <>
          <div className={styles.flagOff}></div>
          <span className={styles.text}>OFF</span>
        </>
      )}

      <LazyLoadImage
        src={product.imageUrl}
        alt={product.productName}
        effect="blur"
        height={200}
        className={styles.productImage}
      />

      <div className={styles.containerGray}>
        <h2 className={styles.title}>{product.productName}</h2>

        <div className={styles.stars}>{renderStars(product.stars)}</div>

        {product.listPrice ? (
          <p className={styles.listPrice}>
            de{" "}
            {(Number(product.listPrice) / 100).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        ) : (
          <div className={styles.separatePrice}></div>
        )}

        <p className={styles.price}>
          por{" "}
          {(product.price / 100).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        {product.installments.length > 0 ? (
          <div className={styles.installments}>
            <p className={styles.textInstallments}>
              ou em {product.installments[0].quantity}x de{" "}
              {(product.installments[0].value / 100).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        ) : (
          <div className={styles.separateInstallments}></div>
        )}

        <div className={styles.containerButton}>
          <button className={styles.button} onClick={incrementCart}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
