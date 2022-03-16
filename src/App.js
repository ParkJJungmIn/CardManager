import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import Login from './components/login/login';
import styles from './App.module.css'
import Maker from './components/Maker/maker';


function App({authService, cardRepository}) {
  return (
    <div className={styles.App}>
    <BrowserRouter>
        <Routes>
            <Route path = "home" element = {<Home/>}/>
            <Route path = "/" element = {<Login authService={authService} />}/>
            <Route path = "maker"
             element = {<Maker authService={authService} 
                               cardRepository={cardRepository} />}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
