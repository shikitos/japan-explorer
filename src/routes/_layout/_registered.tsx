import { createFileRoute, Outlet } from "@tanstack/react-router";

function HomeLayout() {
    return <Outlet />;
}

export const Route = createFileRoute("/_layout/_registered")({
    component: HomeLayout,
});
