import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
import Login_form from './login_form';


const Login = ({authService}) =>{
    const history = useNavigate();

    const goToMaker = userId =>{
        
        history("/maker" , { state : {id :userId} });
    }

    const onGoogleLogin = event => {
        authService
        .login(event.currentTarget.textContent).then(
            data => goToMaker(data.user.uid));
    };

          return (
              <>
                  <Header/>
            <div className={styles.main}>
                <div className={styles.login_div}>
                    <section className={styles.login_form}>

                        <h1>로그인</h1>
                            <div>
                                <button className={styles.google} onClick={onGoogleLogin}>Google</button>
                            </div>
                    </section>
                </div>
            </div>
              </>
          );
} 

export default Login;
