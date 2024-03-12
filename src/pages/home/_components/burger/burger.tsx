import React from "react";
import { motion } from "framer-motion";
import { lineVariantsList } from "./animations";
import { Line } from "./line";
import styles from "./burger.module.scss";
import { Nav } from "../nav";

export const Burger: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const handleClick = () => {
        setIsOpen((state) => !state);
    };

    return (
        <>
            <motion.button
                initial="closed"
                animate={isOpen ? "opened" : "closed"}
                className={styles.burger}
                onClick={handleClick}
            >
                {lineVariantsList.map((variants, index) => (
                    <Line
                        key={index}
                        variants={variants}
                        className={styles.burger__line}
                    />
                ))}
            </motion.button>
            <Nav isOpen={isOpen} />
        </>
    );
};
