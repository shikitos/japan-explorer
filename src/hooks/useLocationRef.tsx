import React, { useEffect, useRef } from "react";
import { Location, useLocation } from "react-router-dom";

export const useLocationRef = (): React.MutableRefObject<Location> => {
    const location = useLocation();
    const ref = useRef<Location>(location);
    useEffect(() => {
        ref.current = location;
    }, [location]);
    return ref;
};
