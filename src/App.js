import './App.css';
import { Home, About, Classes, Contact } from "./view";
import { Navbar } from './component';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
	return (
		<Router>
			<Navbar />
			<div className="App">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/classes' element={<Classes />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
