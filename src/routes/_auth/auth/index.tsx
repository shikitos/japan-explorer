import React from "react";
import { useSessionStore } from "@entities/session/libs";
import { createFileRoute } from "@tanstack/react-router";

const AuthPage: React.FC = () => {
    const { loading, session, setLoading, setAuthUser } = useSessionStore();

    console.log(loading, session);
    return <div>auth</div>;
};

export const Route = createFileRoute("/_auth/auth/")({
    component: AuthPage,
});
