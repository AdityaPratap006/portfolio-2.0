import { useCallback, useEffect, useRef, useState } from "react";

export const useRecursiveTimeout = (callback: Function, delay: number) => {
    const [isRunning, setIsRunning] = useState(false);
    const stop = useCallback(() => setIsRunning(false), [setIsRunning]);
    const play = useCallback(() => setIsRunning(true), [setIsRunning]);
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!isRunning) return;
        let id = 0;

        const tick = () => {
            if (!isRunning) return clearTimeout(id);
            savedCallback.current();
            requestAnimationFrame(() => (id = window.setTimeout(tick, delay)));
        };
        requestAnimationFrame(() => (id = window.setTimeout(tick, delay)));

        return () => {
            if (id) clearTimeout(id);
            stop();
        };
    }, [isRunning, delay, stop]);

    return { play, stop };
};
