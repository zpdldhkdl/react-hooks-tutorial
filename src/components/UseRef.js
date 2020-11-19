import React, { useRef } from 'react';

export default function UseRef() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
        console.log(inputEl.current.value);
    }

    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    );
}
