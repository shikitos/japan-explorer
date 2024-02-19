import { lazy } from "react";

// @ts-ignore
const LandingPage = lazy(() => import("./LandingPage").then((page) => ({ default: page.LandingPage })));

export const Pages = () => {
    return (<div></div>
    );
};