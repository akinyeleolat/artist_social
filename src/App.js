import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { getAllArtist } from './actions/artistAction';
import Home from './components/Home';
import Album from './components/Album';

import store from './store';

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

import './index.css';


store.dispatch(getAllArtist());

toast.configure({
  autoClose: 2000,
  draggable: false,
})



const App = () =>{
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/artist/:id" component={Album} />
        </Switch>
      </BrowserRouter>
      <ToastContainer/>
    </Provider>
        );
}

export default App;
