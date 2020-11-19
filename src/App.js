import React from 'react';
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";
import './App.css';

export default function App() {
    return (
        <div className="main">
            <UseState />
            <UseEffect />
            <UseReducer />
            <UseRef />
        </div>
    )
}
