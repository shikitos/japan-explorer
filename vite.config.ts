import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@libs": path.resolve(__dirname, "./src/libs"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@providers": path.resolve(__dirname, "./src/providers"),
            "@services": path.resolve(__dirname, "./src/services"),
            "@stores": path.resolve(__dirname, "./src/stores"),
            "@shared": path.resolve(__dirname, "./src/shared"),
            "@data": path.resolve(__dirname, "./src/data"),
        },
    },
});
