import { Variants } from "framer-motion";

export const lineVariantsList: Variants[] = [
    {
        closed: {
            rotate: 0,
            translateY: 0,
        },
        opened: {
            rotate: 45,
            translateY: 8,
        },
    },
    {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        },
    },
    {
        closed: {
            rotate: 0,
            translateY: 0,
        },
        opened: {
            rotate: -45,
            translateY: -8,
        },
    },
];
