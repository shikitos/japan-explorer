import { HomeLayout } from "pages/home/layout";
import { HomePage } from "pages/home/page";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const routes = createRoutesFromElements(
    <>
        <Route element={<HomeLayout />}>
            <Route
                path="/"
                element={<HomePage />}
            />
        </Route>
    </>
);

export const router = createBrowserRouter(routes);
