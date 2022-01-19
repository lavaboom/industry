// React modules
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// app styles & assets
import './App.scss';
// sub components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// pages
import HomePage from './pages/HomePage/HomePage'
import ItemDetailsPage from './pages/ItemDetailsPage/ItemDetailsPage'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <div>
        <Switch>
          <Route path='/' exact component={ HomePage } />
          <Route path='/item/:id' exact render={(props) => <ItemDetailsPage {...props} />} />
        </Switch>
      </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
