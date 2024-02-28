import { IPageLayoutContent } from "models";

export const AuthContent: Map<string, IPageLayoutContent> = new Map([
    [
        "login",
        {
            linkTo: "/auth/register",
            linkText: "Create new one",
            title: "Sign in to your account",
            linkLabelText: "Don't have an account?",
        },
    ],
    [
        "register",
        {
            linkTo: "/auth/login",
            linkText: "Login instead",
            title: "Login to your account",
            linkLabelText: "Already have an account?",
        },
    ],
]);
