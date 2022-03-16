import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CardRepository from './service/card_repository'
import AuthService from './service/auth_service';
import { firebaseApp } from './service/firebase';


const authService = new AuthService(firebaseApp.app);
const cardRepository = new CardRepository(firebaseApp.db);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService}
        cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
