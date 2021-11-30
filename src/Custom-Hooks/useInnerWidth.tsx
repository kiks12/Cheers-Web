import { useCallback, useEffect, useState } from "react";

const useInnerWidth = () => {
    const [intialState, setInitialState] = useState<number>(0);

    const getWindowInnerWidth = useCallback(() => {
        setInitialState(window.innerWidth);
    }, [setInitialState]);

    useEffect(() => {
        window.addEventListener("load", getWindowInnerWidth);
        return () => window.removeEventListener("load", getWindowInnerWidth);
    }, []);
    
    useEffect(() => {
        window.addEventListener("resize", getWindowInnerWidth);
        return () => window.removeEventListener("resize", getWindowInnerWidth);
    }, []);

    return [intialState];
}


export default useInnerWidth;