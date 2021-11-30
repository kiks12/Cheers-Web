import React, { useEffect, useState } from "react";

const getWindowInnerWidth = (setInitialState : React.Dispatch<React.SetStateAction<number>>) => {
    setInitialState((prev: number) => prev = window.innerWidth);
}

const useInnerWidth = () => {
    const [intialState, setInitialState] = useState<number>(0);

    useEffect(() => {
        window.addEventListener("load", () => {
            console.log("load");
            setInitialState((prev: number) => prev = window.innerWidth);
        })
        
    }, []);
    
    useEffect(() => {
        window.addEventListener("resize", getWindowInnerWidth.bind(null, setInitialState));

        return () => {
            window.removeEventListener("resize", getWindowInnerWidth.bind(null, setInitialState));
        }
    }, []);

    return [intialState];
}


export default useInnerWidth;