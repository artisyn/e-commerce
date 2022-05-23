import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';
import PageRoutes from './routes/PageRoutes';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<PageRoutes />
			</div>
		</BrowserRouter>
	);
}

export default App;

//2 .36
