import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_registered/profile/")({
    component: ProfilePage,
});

function ProfilePage() {
    return <div>User btw</div>;
}
