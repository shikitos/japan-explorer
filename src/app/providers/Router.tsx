import React, { Suspense } from "react";
import { Loader } from "@shared/ui";

export const Router = ({ children }: { children: React.ReactNode }) => {
    return <Suspense fallback={<Loader />}>{children}</Suspense>;
};
