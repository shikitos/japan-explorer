import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), TanStackRouterVite()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@routes": path.resolve(__dirname, "./src/routes"),
            "@widgets": path.resolve(__dirname, "./src/widgets"),
            "@features": path.resolve(__dirname, "./src/features"),
            "@entities": path.resolve(__dirname, "./src/entities"),
            "@shared": path.resolve(__dirname, "./src/shared"),
        },
    },
});
