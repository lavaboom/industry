// React modules
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// app styles & assets
import "./App.scss";
// sub components
import Header from "./components/Header/Header";
import NavBarBottom from "./components/NavBarBottom/NavBarBottom";

// pages
import HomePage from "./pages/HomePage/HomePage";
import CognitivePage from "./pages/CognitivePage/HomePage";
import RecoveryPage from "./pages/RecoveryPage/HomePage";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/cognitive" exact component={CognitivePage} />
					<Route path="/recovery" exact component={RecoveryPage} />
					{/* <Route path='/item/:id' exact render={(props) => <ItemDetailsPage {...props} />} /> */}
				</Switch>
			</div>
			<NavBarBottom />
		</BrowserRouter>
	);
}

export default App;
