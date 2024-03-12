import React from "react";
import { motion } from "framer-motion";
import { lineVariantsList } from "./animations";
import { Line } from "./line";
import { Nav } from "./nav";

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
                className="z-50 flex h-5 w-10 cursor-pointer flex-col items-start justify-between gap-1 focus:outline-none"
                onClick={handleClick}
            >
                {lineVariantsList.map((variants, index) => (
                    <Line
                        key={index}
                        variants={variants}
                    />
                ))}
            </motion.button>
            <Nav isOpen={isOpen} />
        </>
    );
};
