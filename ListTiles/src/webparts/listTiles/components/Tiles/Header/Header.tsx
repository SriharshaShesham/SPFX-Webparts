import * as React from 'react';
import styles from './Header.module.scss';

 
const Header = props => {
    const {headerText}=props;
    //console.log("-----------------Inside Header");
    return (
        <h3 className={styles.header}><span className={styles.text}>{headerText}</span></h3>

    );
}

export default Header;