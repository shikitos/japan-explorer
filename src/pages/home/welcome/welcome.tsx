import styles from "./welcome.module.scss";

export const Welcome = () => {
    return (
        <section className={styles.welcome}>
            <figure className={styles.welcome__figure}>
                <figcaption className={styles["figure-caption"]}>
                    <h1 className={styles["figure-caption__title"]}>
                        Japan Adventure
                    </h1>
                    <p className={styles["figure-caption__text"]}>
                        Discover the country&apos;s hidden gems and create unforgettable memories that will last a lifetime. Immerse yourself in
                        Japanese culture and atmosphere, and fall in love with Japan forever.
                    </p>
                </figcaption>
                <img
                    src="backgrounds/fuji-background.webp"
                    alt="Background image of Mount Fuji"
                    className={styles["figure-image"]}
                />
            </figure>
        </section>
    );
};
