import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import AboutSection from './components/AboutSection';
import CarouselSection from './components/CarouselSection';
import Footer from './components/Footer';

import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';

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
                            <AboutSection />
                            <FirstSection />
                            <SecondSection />
                            <ThirdSection />
                            <Footer />
                        </>
                    }
                />

                <Route path="/flowers" element={<ProductPage />} />
                <Route
                    path="/info/:productId"
                    element={<ProductDetailPage />}
                />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </Router>
    );
}

export default App;
