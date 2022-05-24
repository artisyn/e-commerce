import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductList from '../pages/ProductList';
import ProductPage from '../pages/ProductPage';
import Register from '../pages/Register';
import User from '../pages/User';
const PageRoutes = () => {
	return (
		<Routes>
			<Route path="/Home" element={<Home />} />
			<Route path="/Cart" element={<Cart />} />
			<Route path="/Login" element={<Login />} />
			<Route path="/Register" element={<Register />} />
			<Route path="/ProductList" element={<ProductList />} />
			<Route path="/ProductPage" element={<ProductPage />} />
			<Route path="/User" element={<User />} />
			<Route path="*" element={<Navigate to="/Home" />} />
		</Routes>
	);
};

export default PageRoutes;
