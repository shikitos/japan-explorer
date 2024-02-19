import { Router } from "./Router.tsx";
import React from "react";

export const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <Router>{children}</Router>
    )
}