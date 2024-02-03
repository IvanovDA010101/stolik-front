import {useEffect, useRef} from 'react';
import * as fabric from 'fabric';

const grid = 30
const lineStroke = '#000000'

function createTable(canvas) {
    console.log(canvas.height / grid);

    for (let i = 0; i < (canvas.height / grid); i++) {
        const lineX = new fabric.Line([0, i * grid, canvas.height, i * grid], {
            stroke: lineStroke,
            selectable: false,
            type: 'line',
            fill:'black'
        })
        const lineY = new fabric.Line([i * grid, 0, i * grid, canvas.height], {
            stroke: lineStroke,
            selectable: false,
            type: 'line'
        })
        // canvas = sendLinesToBack(canvas)
        canvas.add(lineX)
        canvas.add(lineY)
        // return canvas
    }
}

function sendLinesToBack(canvas) {
    canvas.getObjects().map(o => {
        if (o.type === 'line') {
            canvas.sendToBack(o)
        }
    })
    return canvas
}

export const MyFabricComponent: React.FC = () => {
    const canvasEl = useRef();
    const fabricIns = useRef(null);

    useEffect(() => {
        console.log('mounted');

        if (canvasEl.current && !fabricIns.current) {
            fabricIns.current = new fabric.Canvas(canvasEl.current, {
                width: 800,
                height: 800,
                selection: true

            });
            const canvas = fabricIns.current;
            console.log(canvasEl, canvas);

            for (let i = 0; i < (canvas.height / grid); i++) {
                const lineX = new fabric.Line([0, i * grid, canvas.height, i * grid], {
                    stroke: lineStroke,
                    selectable: false,
                    type: 'line',
                    fill:'black'
                })
                const lineY = new fabric.Line([i * grid, 0, i * grid, canvas.height], {
                    stroke: lineStroke,
                    selectable: false,
                    type: 'line'
                })
                // canvas = sendLinesToBack(canvas)
                canvas.add(lineX)
                canvas.add(lineY)
                // return canvas
            }

            // createTable(canvas)

            canvas.add(new fabric.Rect({width: 50, height: 50, fill: 'red'})); // Example: adding a rectangle
            canvas.add(new fabric.Rect({width: 20, height: 20, fill: 'black'})); // Example: adding a rectangle
            canvas.add(new fabric.Rect({width: 10, height: 10, fill: 'green'})); // Example: adding a rectangle
            canvas.add(new fabric.Rect({width: 10, height: 10, fill: 'green'})); // Example: adding a rectangle

            const lineX = new fabric.Line([0, 100, canvas.height, 200], {
                stroke: lineStroke,
                selectable: false,
                type: 'line',
                fill:'black'
            })
            canvas.add(lineX);

            const json = JSON.stringify(canvas)
            console.log(json)

            return () => {
                // canvas.destroy();
            }
        }
    }, []);


    return <canvas id="canvas" ref={canvasEl}/>;
};
