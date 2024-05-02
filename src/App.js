// App.js
import React from "react";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Pack from "./pages/Pack";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/Pack/:set" element={<Pack />} /> 
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
		</Router>
	); //here is the navbar
}

export default App;
