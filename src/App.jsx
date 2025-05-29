import { useState } from 'react';
import './App.css';
import Products from './components/Products';

//fonts
import '@fontsource/aboreto'; // Standard: 400 vikt

import Header from './components/Header';

function App() {
    return (
        <>
            <Header />
            <h1>hejsan</h1>
            <Products />
        </>
    );
}

export default App;
