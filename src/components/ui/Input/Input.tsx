import { ComponentPropsWithRef, forwardRef } from "react";

interface InputProps extends ComponentPropsWithRef<"input"> {
    label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ label, ...props }, ref) {
    return (
        <>
            <input
                ref={ref}
                {...props}
            />
            <label htmlFor={props.id}>{label}</label>
        </>
    );
});
