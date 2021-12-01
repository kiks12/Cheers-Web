import { useCallback, useEffect, useState } from "react";

type DEFAULT_SCREEN_SIZE = number;
const _DEFAULT_SCREEN_SIZE: DEFAULT_SCREEN_SIZE = 1280;

const useInnerWidth = () => {
	const [intialState, setInitialState] =
		useState<number>(_DEFAULT_SCREEN_SIZE);

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
};

export default useInnerWidth;
