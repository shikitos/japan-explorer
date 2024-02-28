import React from "react";
import authBackgroundImage from "assets/images/auth-bg.webp";
import { LazyImage } from "components/ui";

export const RightImage: React.FC = () => (
    <aside className="h-full w-full flex-1 lg:block lg:flex-1">
        <LazyImage
            src={authBackgroundImage}
            className="object-center-right h-full w-full object-cover"
        />
    </aside>
);
