import React from 'react';
import './App.css';
import { Home, About, Classes, Contact } from "./view";
import { Navbar, Footer, ScrollToTop } from './component';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Navbar />
			<div className="App">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/classes' element={<Classes />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
