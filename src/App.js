import react from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./app/components/Header/Header";
import Footer from "./app/components/Footer/Footer";
import Login from './app/containers/Login/Login';
import Signup from './app/containers/Signup/Signup';
import ForgetPassword from './app/containers/ForgetPassword/ForgetPassword';
import Dashboard from './app/containers/Dashboard/Dashboard';
import './app/assets/scss/app.scss';
import './app/assets/scss/Custom.scss';



const App = () => {
  return (
    <div className="App">
      <Header signIn={true} />
      {/* <Dashboard /> */}
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => (<Login />)} />
            <Route exact path="/signin" render={() => (<Login />)} />
            <Route exact path="/forgetPassword" render={() => (<ForgetPassword />)} />
            <Route exact path="/signup" render={() => (<Signup />)} />
            <Route exact path="/dashboard" render={() => (<Dashboard />)} />
          </Switch>
        </BrowserRouter>
      </main>
      {/* <Login />
      <Signup /> */}
      <Footer />
    </div>
  );
}

export default App;
