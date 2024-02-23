import { AuthLayout } from "@pages/auth/layout";
import { AuthPage } from "@pages/auth/login/page";
import { HomeLayout } from "@pages/home/layout";
import { HomePage } from "@pages/home/page";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const routes = createRoutesFromElements(
    <>
        <Route element={<HomeLayout />}>
            <Route
                path="/"
                element={<HomePage />}
            />
        </Route>
        <Route path="/auth">
            <Route element={<AuthLayout />}>
                <Route
                    path="login"
                    element={<AuthPage />}
                />
            </Route>
        </Route>
    </>
);

export const router = createBrowserRouter(routes);
