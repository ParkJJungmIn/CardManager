import React, { memo } from 'react';
import styles from './header.module.css'

const Header = memo( ( {onLogout}) => {
    return(
        <div className={styles.header}>
           <a><img src="/img/logo.jpg"/></a>
           <h1>Business Card</h1>
           <div className={styles.right_item}>
               { onLogout  && 
               (
                   <a><img className={styles.logout} src="/img/icon-logout.png"/></a>
               )
               }
            <a><img src="/img/icon-hambuger.png"/></a>
           </div>
        </div>
    )
});

export default Header;
