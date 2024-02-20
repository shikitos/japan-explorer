import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
    component: PagesLayout,
});

function PagesLayout() {
    return (
        <div>
            Pages page <Link to={"../"}>Go back</Link>
            <Outlet />
        </div>
    );
}
