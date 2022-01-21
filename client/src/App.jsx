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
import OverviewPage from "./pages/OverviewPage/OverviewPage";

function App() {
	return (
		<div className="mobile">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/cognitive" exact component={CognitivePage} />
					<Route path="/recovery" exact component={RecoveryPage} />
					<Route path="/overview" exact component={OverviewPage} />

					{/* <Route path='/item/:id' exact render={(props) => <ItemDetailsPage {...props} />} /> */}
				</Switch>
				<NavBarBottom />
			</BrowserRouter>
		</div>
	);
}

export default App;
