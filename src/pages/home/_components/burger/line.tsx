import { Variants, motion } from "framer-motion";

interface LineProps {
    variants: Variants;
    className: string;
}

export const Line = ({ variants, className }: LineProps) => {
    return (
        <motion.div
            variants={variants}
            className={className}
        />
    );
};
