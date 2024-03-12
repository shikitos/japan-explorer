import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./nav.module.scss";

type NavProps = {
    isOpen: boolean;
};

export const Nav: React.FC<NavProps> = ({ isOpen }) => {
    return (
        <motion.div className={styles.nav} data-open={isOpen}>
            <section></section>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Tokyo</Link>
                    </li>
                    <li>
                        <Link to="/auth">Kyoto</Link>
                    </li>
                    <li>
                        <Link to="/contact">Osaka</Link>
                    </li>
                    <li>
                        <Link to="/contact">Hokkaido</Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="uppercase"
                        >
                            Nara
                        </Link>
                    </li>
                </ul>
            </nav>
        </motion.div>
    );
};
