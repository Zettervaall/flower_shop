import { useState } from 'react';
import './App.css';
import Products from './components/Products';

import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
    return (
        <>
            <Header />
            <Navigation />
            <h1>hejsan</h1>
            <Products />
        </>
    );
}

export default App;
