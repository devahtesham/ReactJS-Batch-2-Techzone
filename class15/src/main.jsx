import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CartItemsProvider } from './context/CartItemsContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartItemsProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CartItemsProvider>
)
