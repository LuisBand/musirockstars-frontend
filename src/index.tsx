import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from './App';
import "./index.css";
import store from './redux/store';
import {Provider} from 'react-redux';
import axios from 'axios';
import jwt_decode from "jwt-decode";

axios.defaults.baseURL = 'http://localhost:5522';

if(localStorage.getItem('token') != null) {
  const token = localStorage.getItem('token');
  const data = jwt_decode(token!);
  console.log(data);
}
else{

}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>  
  </Provider>,
  document.getElementById('root')
)

