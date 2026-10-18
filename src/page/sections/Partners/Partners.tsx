import { Window } from "@/components/window/Window";
import { Typography } from "@/ui/typography/Typography";

import styles from "./Partners.module.scss";

export const Partners = () => {
  const partners = [
    { Logo: "/images/most-urfu.webp", alt: "МОСТ УрФУ" },
    { Logo: "/images/urfu.webp", alt: "УрФУ" },
  ];

  return (
    <section className={styles.partnersSection}>
      <Typography variant="h1" color="invert" className={styles.title}>
        {"//ПАРТНЕРЫ"}
      </Typography>
      <Window title="mentors.hack">
        <div className={styles.content}>
          <div className={styles.marquee}>
            <div className={styles.track}>
              {partners.map((partner) => (
                <div className={styles.logoCard} key={partner.alt}>
                  <img
                    src={partner.Logo}
                    alt={partner.alt}
                    className={styles.logo}
                  />
                </div>
              ))}
            </div>
            <div className={styles.track} aria-hidden>
              {partners.map((partner) => (
                <div className={styles.logoCard} key={`${partner.alt}-dup`}>
                  <img
                    src={partner.Logo}
                    alt={partner.alt}
                    className={styles.logo}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Window>
    </section>
  );
};
