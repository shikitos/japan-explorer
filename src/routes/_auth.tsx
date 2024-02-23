import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
    component: PagesLayout,
});

function PagesLayout() {
    return (
        <main style={{background: "#353535"}}>
            Pages page <Link to={"../"}>Go back</Link>
            <Outlet />
        </main>
    );
}
