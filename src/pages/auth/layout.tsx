import React, { useRef } from "react";
import { AuthContent } from "data";
import { useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { LeftContent, RightImage } from "./sections";

export const AuthLayout: React.FC = () => {
    const location = useLocation();
    const route = location.pathname.split("/").pop() || "";
    const routeContent = AuthContent.get(route);
    const nodeRef = useRef<HTMLElement | null>(null);
    const currentOutlet = useOutlet();

    if (!route || !routeContent) return null;
    return (
        <main className="flex h-screen w-screen">
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    classNames={{
                        enter: "opacity-0",
                        enterActive: "opacity-100 transition duration-300",
                        exit: "opacity-100",
                        exitActive: "opacity-0 transition duration-300",
                    }}
                    nodeRef={nodeRef}
                    appear
                    timeout={300}
                >
                    {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
                    {(state) => (
                        <LeftContent
                            ref={nodeRef}
                            {...routeContent}
                        >
                            {currentOutlet}
                        </LeftContent>
                    )}
                </CSSTransition>
            </SwitchTransition>
            <RightImage />
        </main>
    );
};
