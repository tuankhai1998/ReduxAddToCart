import React from 'react';
import Header from './components/Header';
import About from './components/About_Us';
import ProductContainers from './containers/ProductContainers';

import Footer from './components/Footer';
// import Product from './components/Product';

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <ProductContainers />
            <Footer />
        </div>
    );
}

export default App;
