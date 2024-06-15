import './App.css';

import React, { useState, useEffect, useRef } from 'react';

import NodeCanvas from './NodeCanvas';

function Button({ word }) {
    const [rand_color] = useState(
        `#${Math.floor(Math.random() * (256 * 256 * 256))
            .toString(16)
            .padStart(6, '0')}`
    );

    const handleButtonPress = (event) => {
        console.log(word);
    };

    return (
        <button
            style={{
                width: '100%',
                height: '100%',
                padding: 0,
                border: 0,
                backgroundColor: rand_color,
                color: 'white',
                borderRadius: '20%',
            }}
            onClick={handleButtonPress}
        >
            <p>{word}</p>
        </button>
    );
}

function ButtonMenu({ divRef }) {
    return (
        <div
            ref={divRef}
            style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                maxWidth: 100,
            }}
        >
            <Button word={'node'}></Button>
            <Button word={'connect'}></Button>
            <Button word={'undo'}></Button>
            <Button word={'redo'}></Button>
        </div>
    );
}

function App() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const resize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    const [width, setWidth] = useState(0);
    const buttonMenuRef = useRef(null);

    useEffect(() => {
        if (buttonMenuRef.current != null) {
            console.log(buttonMenuRef.current);
            setWidth(buttonMenuRef.current.width);
        }
    }, []);

    return (
        <>
            <div
                style={{ width: '100%', height: 100, backgroundColor: 'black' }}
            >
                <p
                    style={{
                        color: 'white',
                        margin: 0,
                        padding: '10px',
                        fontSize: '36px',
                    }}
                >
                    This is a test navbar for sizing purposes.
                </p>
            </div>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                <ButtonMenu divRef={buttonMenuRef}></ButtonMenu>

                <NodeCanvas
                    windowWidth={size.width - width}
                    windowHeight={size.height - 100}
                ></NodeCanvas>
            </div>
        </>
    );
}

export default App;
