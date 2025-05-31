import { useState } from 'react';
import './App.css';
import Products from './components/Products';

import Header from './components/Header';
import Navigation from './components/Navigation';
import FirstSection from './components/FirstSection';
import ThirdSection from './components/ThirdSection';
import AboutSection from './components/AboutSection';

function App() {
    return (
        <>
            <Header />
            <Navigation />
            <FirstSection />
            <Products />
            <ThirdSection />
            <AboutSection />
        </>
    );
}

export default App;
