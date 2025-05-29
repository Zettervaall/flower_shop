import { useState } from 'react';
import './App.css';
import Products from './components/Products';
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
