import React, { useState, useEffect } from 'react';

export default function UseEffect() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, [time]);

    return (
        <div>
            <h2>{time.toLocaleString()}</h2>
        </div>
    );
}

/*
    useEffect = { componentDidMount, componentDidUpdate }

    componentDidMount() {
        document.title = `count: ${count}`;
    }

    componentDidUpdate() {
        document.title = `count: ${count}`;
    }

    ==>

    useEffect(() => {
        document.title = `count: ${count}`;
    });


 */
