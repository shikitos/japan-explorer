import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

function HomeLayout() {
    return (
        <div>
            HOME page layout <Link to="auth">Sign In</Link>
            <Outlet />
        </div>
    );
}

export const Route = createFileRoute("/_layout")({
    component: HomeLayout,
});
