import authBackgroundImage from "@assets/images/auth-bg.webp";
import { LazyImage } from "@components/ui";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
    return (
        <main className="flex h-screen w-screen">
            <section className="flex flex-1 items-center justify-between">
                <h1 className="text-2xl text-white">Auth</h1>
                <Outlet />
                <span>or using icons...</span>
            </section>
            <aside className="h-full w-full flex-1 lg:block lg:flex-1">
                <LazyImage
                    src={authBackgroundImage}
                    className="object-center-right h-full w-full object-cover"
                />
            </aside>
        </main>
    );
};
