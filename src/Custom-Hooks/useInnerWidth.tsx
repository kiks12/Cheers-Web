import { Dispatch, SetStateAction, useEffect, useState } from "react";

const getWindowInnerWidth = (setInitialState : Dispatch<SetStateAction<number>> = null) => {
    setInitialState((prev: number) => prev = window.innerWidth);
}

const useInnerWidth = () => {
    const [intialState, setInitialState] = useState<number>(1280);
    
    useEffect(() => {
        window.addEventListener("resize", getWindowInnerWidth.bind(null, setInitialState));

        return () => {
            window.removeEventListener("resize", getWindowInnerWidth.bind(null));
        }
    })

    return [intialState];
}


export default useInnerWidth;