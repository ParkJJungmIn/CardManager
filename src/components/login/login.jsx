import React, { memo } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
import Login_form from './login_form';

const Login = ({authService}) =>{
    
    const onGoogleLogin = event => {
        authService
        .login(event.currentTarget.textContent)
    
    }

          return (
              <section className={styles.login_div}>
                  <section>
                  <Header/>
                    <h1>Login</h1>
                    
                    <ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                        <li>
                            <button className={styles.google} onClick={onGoogleLogin}>Google</button>
                        </li>

                        <li>
                            <button className={styles.google} onClick={onGoogleLogin}>Google</button>
                        </li>

                        <li>
                            <button className={styles.google} onClick={onGoogleLogin}>Google</button>
                        </li>
                    </ul>
                    <Footer/>
                  </section>
              </section>
          );
} 

export default Login;
