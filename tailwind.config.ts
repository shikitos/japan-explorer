/** @type {import("tailwindcss").Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            inter: ["Inter", "sans-serif"],
        },
        colors: {
            white: "#F0EFEF",
            red: {
                500: "#DF6032",
            },
            zinc: {
                100: "#F0EFEF",
                800: "#323232",
            }
        },
        extend: {
            fontSize: {
                mid: "1.6875rem",
                "10xl": "10.625rem",
            },
            maxWidth: {
                "8xl": "88rem",
            },
        },
    },
    plugins: [],
};
