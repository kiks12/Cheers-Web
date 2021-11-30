import React, { useEffect, useState } from "react";

const getWindowInnerWidth = (setInitialState : React.Dispatch<React.SetStateAction<number>>) => {
    setInitialState((prev: number) => prev = window.innerWidth);
}

const useInnerWidth = () => {
    const [intialState, setInitialState] = useState<number>(1280);
    
    useEffect(() => {
        window.addEventListener("resize", getWindowInnerWidth.bind(null, setInitialState));

        return () => {
            window.removeEventListener("resize", getWindowInnerWidth.bind(null, setInitialState));
        }
    })

    return [intialState];
}


export default useInnerWidth;