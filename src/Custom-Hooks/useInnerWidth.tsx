import React, { useEffect, useState } from "react";

type DESKTOP_SCREEN_SIZE = number;
const DEFAULT_DESKTOP_SCREEN_SIZE : DESKTOP_SCREEN_SIZE= 1280;

const getWindowInnerWidth = (setInitialState : React.Dispatch<React.SetStateAction<number>>) => {
    setInitialState((prev: number) => prev = window.innerWidth);
}

const useInnerWidth = () => {
    const [intialState, setInitialState] = useState<number>(DEFAULT_DESKTOP_SCREEN_SIZE);
    
    useEffect(() => {
        window.addEventListener("resize", getWindowInnerWidth.bind(null, setInitialState));

        return () => {
            window.removeEventListener("resize", getWindowInnerWidth.bind(null, setInitialState));
        }
    })

    return [intialState];
}


export default useInnerWidth;