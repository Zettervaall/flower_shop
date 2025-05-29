import { useState } from 'react';
import './App.css';
import Products from './components/Products';

//fonts
import '@fontsource/aboreto'; // Standard: 400 vikt
import Header from './components/Header';
import Navigation from './components/Navigation';
import FirstSection from './components/FirstSection';
import ThirdSection from './components/ThirdSection';

function App() {
    return (
        <>
            <Header />
            <Navigation />
            <FirstSection />
            <Products />
            <ThirdSection />
        </>
    );
}

export default App;
