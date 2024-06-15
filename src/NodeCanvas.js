import { Stage, Container, Graphics } from '@pixi/react';
import { useState } from 'react';

function NodeCanvas({ windowWidth, windowHeight }) {
    const [nodes, setNodes] = useState([]);

    const handleClick = (event) => {
        console.log(event);
        setNodes([
            ...nodes,
            {
                x: event.pageX - event.target.offsetLeft,
                y: event.pageY - event.target.offsetTop,
            },
        ]);
    };

    return (
        <Stage
            width={windowWidth}
            height={windowHeight}
            options={{ backgroundColor: 0x10bb99 }}
            onPointerDown={handleClick}
        >
            <Container>
                {nodes.map((node, index) => (
                    <Graphics
                        key={index}
                        draw={(g) => {
                            g.clear();
                            g.beginFill(0xff0000);
                            g.drawCircle(0, 0, 10);
                            g.endFill();
                        }}
                        x={node.x}
                        y={node.y}
                    ></Graphics>
                ))}
            </Container>
        </Stage>
    );
}

export default NodeCanvas;
