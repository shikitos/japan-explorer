import React from "react";
import { Button, Input } from "components/ui";

export const Form: React.FC = () => {
    return (
        <form
            action=""
            className="flex flex-col gap-2"
        >
            <Input
                className="flex flex-col-reverse rounded px-4 py-2 text-black"
                placeholder="Email"
                type="email"
                label="Email"
                id="login-email"
            />
            <Input
                className="flex flex-col-reverse rounded px-4 py-2 text-black"
                placeholder="Password"
                type="password"
                label="Password"
                id="login-password"
            />
            <Button type="submit">Sign In</Button>
        </form>
    );
};
