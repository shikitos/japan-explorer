import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_registered/dashboard/")({
    component: ProfilePage,
});

function ProfilePage() {
    return <div>Profile (are you registered mfg)?</div>;
}
