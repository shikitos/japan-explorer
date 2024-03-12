import { Outlet } from "react-router-dom";
import { Burger } from "./_components";

export const HomeLayout = () => {
    return (
        <>
            <header className="flex items-center justify-between p-11">
                <img
                    src="logo.svg"
                    alt="Logo"
                />
                <Burger />
            </header>
            <Outlet />
            <footer></footer>
        </>
    );
};
