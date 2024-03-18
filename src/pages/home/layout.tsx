import { Outlet } from "react-router-dom";
import { Burger } from "./_components";
import styles from "./layout.module.scss";

export const HomeLayout = () => {
    return (
        <>
            <header className={styles.header}>
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
