import { isMobile } from "react-device-detect";

import styles from "./PromotionsBanners.module.css";

interface IPromotionsbanners {
  title?: string;
  subTitle?: string;
  imgMobile: string;
  imgDesktop: string;
}

export function PromotionsBanners(props: IPromotionsbanners) {
  return (
    <div className={styles.promotionsBanners}>
      <div>
        <img
          className={styles.promotionsBannersImg}
          src={isMobile ? props.imgMobile : props.imgDesktop}
          alt="Banner de Promoções"
        />
      </div>
      <div className={styles.promotionsBannersText}>
        <h1 className={styles.promotionsBannersTitle}>{props.title}</h1>
        <p className={styles.promotionsBannersSubTitle}>{props.subTitle}</p>
      </div>
    </div>
  );
}
