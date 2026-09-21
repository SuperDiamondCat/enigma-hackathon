import { Typography } from "@/ui/typography/Typography";

import styles from "./About.module.scss";

export const About = () => {
  return (
    <section className={styles.aboutSection}>
      <Typography variant="h1" color="invert" className={styles.title}>
        {"//О ХАКАТОНЕ"}
      </Typography>
      <Typography variant="p1" color="invert" className={styles.description}>
        24-часовой офлайн-марафон по решению IT-кейсов и задач в сфере цифровой
        инженерии от компаний-партнёров. Работай в команде, прокачивай
        профессиональные навыки, находи нестандартные решения и получай
        практический опыт. Создай свой проект и поборись за возможность попасть
        на стажировку!
      </Typography>

      <div className={styles.cells}>
        <div className={styles.cell}>
          <Typography variant="category" color="accent">
            СТУДЕНТЫ
          </Typography>
          <Typography variant="categoryLight" color="invert">
            технических, IT- и инженерных направлений
          </Typography>
        </div>

        <div className={styles.cell}>
          <Typography variant="category" color="accent">
            ОТ 18 ЛЕТ
          </Typography>
          <Typography variant="categoryLight" color="invert">
            Возраст участников
          </Typography>
        </div>

        <div className={styles.cell}>
          <Typography variant="category" color="accent">
            3–5 человек
          </Typography>
          <Typography variant="categoryLight" color="invert">
            В команде
          </Typography>
        </div>
      </div>
    </section>
  );
};
