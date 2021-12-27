import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import Login from './components/login/login';
import styles from './App.module.css'

function App({authService}) {
  return (
    <div className={styles.App}>
    <BrowserRouter>
        <Routes>
            <Route path = "home" element = {<Home/>}/>
            <Route path = "/" element = {<Login authService={authService} />}/>
            <Route path = "profile" element = {<Profile/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
