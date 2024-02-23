import React, { ComponentPropsWithRef, forwardRef } from "react";
import { cn } from "@libs/index";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
    children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ children, ...props }: ButtonProps, ref) {
    return (
        <button
            className={cn("rounded bg-gray-400 p-2 text-black hover:bg-gray-400/90", props.className)}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
});
