import { StrictMode } from "react";
import { Pointer } from "components/ui";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "styles/main.scss";
import { router } from "../routes";

const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <Pointer />
            <RouterProvider router={router} />
        </StrictMode>
    );
}
