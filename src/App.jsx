import { useState } from 'react';
import './App.css';
import Products from './components/Products';

//fonts
import '@fontsource/aboreto'; // Standard: 400 vikt
import Header from './components/Header';
import Navigation from './components/Navigation';
import AdFrontPage from './components/FirstSection';

function App() {
    return (
        <>
            <Header />
            <Navigation />
            <AdFrontPage />
            <Products />
        </>
    );
}

export default App;
