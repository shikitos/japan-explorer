import React, { ComponentPropsWithRef, forwardRef } from "react";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
    children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ children, ...props }: ButtonProps, ref) {
    return (
        <button
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
});
