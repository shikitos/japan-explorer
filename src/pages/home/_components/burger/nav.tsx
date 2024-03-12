import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type NavProps = {
    isOpen: boolean;
};

export const Nav: React.FC<NavProps> = ({ isOpen }) => {
    return (
        <motion.div className="absolute">
            <section></section>
            <section>
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
            </section>
        </motion.div>
    );
};
