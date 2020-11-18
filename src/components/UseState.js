import React, { useState } from 'react';

export default function UseState() {
    const [count, setCount] = useState(0);
    const onClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={onClick}>
                Click me
            </button>
        </div>
    );
}
