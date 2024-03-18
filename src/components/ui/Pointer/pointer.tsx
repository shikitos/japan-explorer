import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "hooks/useFollowPointer";
import styles from "./pointer.module.scss";

export const Pointer = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    return (
        <motion.div
            ref={ref}
            className={styles.pointer}
            animate={{ x, y }}
            transition={{
                type: "spring",
                damping: 8,
                stiffness: 75,
                restDelta: 0.001,
            }}
        />
    );
};
