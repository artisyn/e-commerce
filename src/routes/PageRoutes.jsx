import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductList from '../pages/ProductList';
import ProductPage from '../pages/ProductPage';
import Register from '../pages/Register';
import SearchResults from '../pages/SearchResults';
import User from '../pages/User';
const PageRoutes = () => {
	return (
		<Routes>
			<Route path="/Home" element={<Home />} />
			<Route path="/Cart" element={<Cart />} />
			<Route path="/Login" element={<Login />} />
			<Route path="/Register" element={<Register />} />
			<Route path="/ProductList" element={<ProductList />} />
			<Route path="/ProductPage/:productId" element={<ProductPage />} />
			<Route path="/User/:userName" element={<User />} />
			<Route path="/Checkout" element={<Checkout />} />
			<Route path="/SearchResults" element={<SearchResults />} />
			<Route path="*" element={<Navigate to="/Home" />} />
		</Routes>
	);
};

export default PageRoutes;
