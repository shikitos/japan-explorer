import { createFileRoute } from "@tanstack/react-router";

const Page = () => {
    return <h1>Some page</h1>;
};

export const Route = createFileRoute("/_layout/")({
    component: Page,
});
