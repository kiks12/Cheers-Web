import React, { useEffect, useState } from "react";

const getWindowInnerWidth = (setInitialState : React.Dispatch<React.SetStateAction<number>>) => {
    setInitialState((prev) => prev = window.innerWidth);
}

const useInnerWidth = () => {
    const [intialState, setInitialState] = useState<number>(0);

    useEffect(() => {
        window.addEventListener("load", getWindowInnerWidth.bind(null, setInitialState));
        return () => window.removeEventListener("load", getWindowInnerWidth.bind(null, setInitialState));
    }, []);
    
    useEffect(() => {
        window.addEventListener("resize", getWindowInnerWidth.bind(null, setInitialState));
        return () => window.removeEventListener("resize", getWindowInnerWidth.bind(null, setInitialState));
    }, []);

    return [intialState];
}


export default useInnerWidth;