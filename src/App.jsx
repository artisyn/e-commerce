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
import { AllProducts } from '../src/data';

function App() {
	const [cartItems, setCartItems] = useState([]);
	const [users, setUsers] = useState([
		{
			name: 'User1',
			password: 'Qwertyqwerty1',
			email: 'user1@mail.com',
			wishlist: [],
		},
	]);
	const [isAuth, setIsAuth] = useState(false);
	const [loggedUser, setLoggedUser] = useState({});
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [selectedProduct, setSelectedProduct] = useState('');
	const [checkoutPrice, setCheckoutPrice] = useState(0);
	const [searchResults, setSearchResults] = useState([]);
	const [color, setColor] = useState('Color');
	const [size, setSize] = useState('Size');
	const [sortBy, setSortBy] = useState('Sort by');
	const [currentPage, setCurrentPage] = useState(1);
	const [initialArray, setInitialArray] = useState(
		selectedCategory === 'all'
			? [...AllProducts]
			: [...AllProducts.filter((el) => el.categorie === selectedCategory)]
	);

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
				checkoutPrice,
				setCheckoutPrice,
				searchResults,
				setSearchResults,
				color,
				setColor,
				size,
				setSize,
				sortBy,
				setSortBy,
				currentPage,
				setCurrentPage,
				initialArray,
				setInitialArray,
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
