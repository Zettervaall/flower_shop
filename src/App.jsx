import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import FirstSection from './components/FirstSection';
import ThirdSection from './components/ThirdSection';
import AboutSection from './components/AboutSection';
import CarouselSection from './components/CarouselSection';

import Products from './components/Products';
import ProductPage from './pages/ProductPage'; //product-sidan

function App() {
    return (
        <Router>
            <Header />
            <Navigation />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <FirstSection />
                            <Products />
                            <ThirdSection />
                            <AboutSection />
                            <CarouselSection />
                        </>
                    }
                />

                <Route path="/flowers" element={<ProductPage />} />
            </Routes>
        </Router>
    );
}

export default App;
