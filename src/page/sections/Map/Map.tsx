import { Window } from "@/components/window/Window";
import { Typography } from "@/ui/typography/Typography";

import styles from "./Map.module.scss";

export const Map = () => {
  return (
    <section className={styles.mapSection}>
      <Typography variant="h1" color="invert" className={styles.title}>
        {"//МЕСТО ПРОВЕДЕНИЯ ХАКАТОНА"}
      </Typography>
      <Window title="place.hack">
        <img
          src="/images/map-8-marta.webp"
          alt="Map"
          className={styles.map}
          onClick={() => {
            window.open(
              "https://yandex.ru/maps/?text=%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3%2C%20%D1%83%D0%BB.%208%20%D0%9C%D0%B0%D1%80%D1%82%D0%B0%2C%20203",
              "_blank",
            );
          }}
        />
        <div className={styles.clickHint} />
      </Window>
    </section>
  );
};
