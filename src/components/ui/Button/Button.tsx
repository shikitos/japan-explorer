import React, { ComponentPropsWithRef, forwardRef } from "react";
import { cn } from "libs";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
    children: React.ReactNode;
    variant?: "primary" | "link";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ children, variant = "primary", ...props }: ButtonProps, ref) {
    // Define different classNames based on the variant prop
    const classNames = {
        primary: "rounded bg-slate-800 hover:bg-slate-700 text-white p-2",
        link: "rounded text-white underline-offset-4 hover:underline",
    };

    return (
        <button
            className={cn(classNames[variant], props.className)}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
});
