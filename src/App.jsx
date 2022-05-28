import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { useContext, useState } from 'react';
import { EcommerceContext } from '../src/context/context';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';
import PageRoutes from './routes/PageRoutes';

function App() {
	const [cartItems, setCartItems] = useState([]);
	const [users, setUsers] = useState([
		{ name: 'User1', password: 'Qwertyqwerty1', email: 'user1@mail.com' },
	]);
	const [isAuth, setIsAuth] = useState(false);
	const [loggedUser, setLoggedUser] = useState({});
	const [selectedCategory, setSelectedCategory] = useState('');
	const [selectedProduct, setSelectedProduct] = useState('');

	return (
		<EcommerceContext.Provider
			value={{
				cartItems,
				setCartItems,
				users,
				setUsers,
				isAuth,
				setIsAuth,
				loggedUser,
				setLoggedUser,
				selectedCategory,
				setSelectedCategory,
				selectedProduct,
				setSelectedProduct,
			}}
		>
			<BrowserRouter>
				<ScrollToTop>
					<div className="App">
						<PageRoutes />
					</div>
				</ScrollToTop>
			</BrowserRouter>
		</EcommerceContext.Provider>
	);
}

export default App;
