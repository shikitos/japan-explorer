import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./nav.module.scss";

type NavProps = {
    isOpen: boolean;
};

export const Nav: React.FC<NavProps> = ({ isOpen }) => {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: "100lvw" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100lvw" }}
                    transition={{
                        duration: 0.75,
                        ease: [0.9, -0.52, 0.55, 1.35],
                    }}
                    className={styles.nav}
                >
                    <section className={styles["nav-menu"]}>
                        <h2 className={styles["nav-menu__title"]}>Japan</h2>
                        <ul className={styles["nav-menu__list"]}>
                            <motion.li className={styles.item}>Culture</motion.li>
                            <motion.li className={styles.item}>history</motion.li>
                            <motion.li className={styles.item}>architecture</motion.li>
                            <motion.li className={styles.item}>food</motion.li>
                            <motion.li className={styles.item}>community</motion.li>
                        </ul>
                    </section>
                    <nav className={styles["nav-cities"]}>
                        <motion.ul
                            className={styles["nav-cities__list"]}
                            transition={{
                                staggerChildren: 0.15,
                            }}
                        >
                            <motion.li
                                className={styles.item}
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.2, stagger: 0.1 }}
                            >
                                <Link
                                    to="/"
                                    className={styles.item__link}
                                >
                                    Tokyo
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.2 }}
                                className={styles.item}
                            >
                                <Link
                                    to="/auth"
                                    className={styles.item__link}
                                >
                                    Kyoto
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.2 }}
                                className={styles.item}
                            >
                                <Link
                                    to="/contact"
                                    className={styles.item__link}
                                >
                                    Osaka
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                className={styles.item}
                            >
                                <Link
                                    to="/contact"
                                    className={styles.item__link}
                                >
                                    Hokkaido
                                </Link>
                            </motion.li>
                            <motion.li
                                className={styles.item}
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Link
                                    to="/contact"
                                    className={styles.item__link}
                                >
                                    Nara
                                </Link>
                            </motion.li>
                        </motion.ul>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
