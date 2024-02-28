import { Button } from "components/ui";
import { Link, Outlet } from "react-router-dom";

export const HomeLayout = () => {
    return (
        <div>
            <Link to="/auth/login">
                <Button>Sign In</Button>
            </Link>
            <Outlet />
        </div>
    );
};
