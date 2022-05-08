import { render } from "react-dom";
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from './App';
import "./index.css";


import Home from './views/home/component';
import Login from "./views/Login/component";
import LoginForm from "./components/forms/login/component";
import RegisterForm from "./components/forms/register/component";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}> 
          <Route path="login" element={<LoginForm/>}/>
          <Route path="signup" element={<RegisterForm/>}/>
      </Route>
      <Route path="/" element={<App/>}>
        <Route path="home" element={<Home/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,  
  document.getElementById('root')
)

