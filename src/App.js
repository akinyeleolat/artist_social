import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { getAllArtist } from './actions/artistAction';

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
      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/offices" component={Offices} />
          <Route path="/forgotpassword" component={ForgotPassword} />
        </Switch>
      </BrowserRouter> */}
      {/* <FlashMessagesList/> */}
      <ToastContainer/>
    </Provider>
        );
}

export default App;
