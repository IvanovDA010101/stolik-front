import * as fabric from "fabric";
import {useEffect, useRef} from "react";

const useFabricCanvas = (initialOptions: fabric.ICanvasOptions) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) {
            const canvas = new fabric.Canvas('canvas', initialOptions); // Create the fabric canvas
            canvasRef.current = canvas; // Assign the created canvas to ref
        }

        return () => {
            if (canvasRef.current) {
                canvasRef.current.dispose(); // Dispose canvas on unmounting
                canvasRef.current = null; // Clear the ref value
            }
        };
    }, [initialOptions]);

    return canvasRef;
};