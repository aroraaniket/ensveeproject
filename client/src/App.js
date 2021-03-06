import React,{useEffect} from 'react';
import { BrowserRouter ,HashRouter, Routes,  Route, Switch } from 'react-router-dom';
import './App.css';
import SignUp from './AuthenticationPages/SignUp';
import SignIn from './AuthenticationPages/SignIn';
import Spp from './AuthenticationPages/Spp';
import setAuthToken from './tokenSetter/SetAuthToken';
import { loadUser } from './action/Auth';
import { Provider } from 'react-redux';

import store from './store'
import GetUser from './AuthenticationPages/GetUser';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App(props) {
console.log(props)
    useEffect(() => {
      store.dispatch(loadUser());
    }, []);

  return (
    <Provider store={store}>
    <div className="App">
     <HashRouter>
    
       <Route  exact path="/"  component={SignUp} ></Route>
       <Route  exact path="/signin" component={SignIn} />
         <Route  exact path="/getUser" component={GetUser} />
     
       </HashRouter>
   
    </div>
    </Provider>
  );
}

export default App;
