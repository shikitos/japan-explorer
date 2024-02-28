import React, { forwardRef } from "react";
import { Button, Logo } from "components/ui";
import { IPageLayoutContent } from "models";
import { Link } from "react-router-dom";

interface LeftContentProps extends IPageLayoutContent {
    children: React.ReactNode;
    ref: React.RefObject<HTMLElement>;
}

export const LeftContent = forwardRef<HTMLElement, LeftContentProps>(function LeftContent(
    { title, linkLabelText, linkText, linkTo, children }: LeftContentProps,
    ref
) {
    return (
        <section
            className="m-4 flex flex-1 flex-col items-center justify-center"
            ref={ref}
        >
            <div className="item-center flex w-full justify-center">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <div className="flex flex-col gap-3 p-2">
                <h1 className="text-3xl font-semibold">{title}</h1>
                <h6 className={`flex items-center justify-between opacity-75`}>
                    <span>{linkLabelText}</span>
                    <Link to={linkTo}>
                        <Button variant="link">
                            {linkText} <i>→</i>
                        </Button>
                    </Link>
                </h6>
                {children}
            </div>
            <span>or using icons...</span>
        </section>
    );
});
