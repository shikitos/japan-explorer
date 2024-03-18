import { ComponentPropsWithoutRef, memo } from "react";

interface LazyImageProps extends ComponentPropsWithoutRef<"img"> {
    loading?: "lazy" | "eager";
    decoding?: "async" | "sync" | "auto";
}

export const LazyImage = memo(function LazyImage({ loading = "lazy", decoding = "async", ...props }: LazyImageProps) {
    return (
        <img
            {...props}
            loading={loading}
            decoding={decoding}
            className={props.className}
        />
    );
});
