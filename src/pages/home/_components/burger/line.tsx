import { Variants, motion } from "framer-motion";

interface LineProps {
    variants: Variants;
}

export const Line = ({ variants }: LineProps) => {
    return (
        <motion.div
            variants={variants}
            className="h-[3px] w-8 bg-zinc-800"
        />
    );
};
