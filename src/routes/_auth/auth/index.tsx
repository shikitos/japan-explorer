import { createFileRoute } from "@tanstack/react-router";

function AuthPage() {
    return <h1>Auth page!!!</h1>;
}

export const Route = createFileRoute("/_auth/auth/")({
    component: AuthPage,
});
