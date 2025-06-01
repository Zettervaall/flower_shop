import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import FirstSection from './components/FirstSection';
import ThirdSection from './components/ThirdSection';
import AboutSection from './components/AboutSection';
import CarouselSection from './components/CarouselSection';

import ProductPage from './pages/ProductPage'; //product-sidan
import CartPage from './pages/CartPage';

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
                            <ThirdSection />
                            <AboutSection />
                            <CarouselSection />
                        </>
                    }
                />

                <Route path="/flowers" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Router>
    );
}

export default App;
