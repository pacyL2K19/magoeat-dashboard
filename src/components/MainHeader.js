import React from 'react';
import 'primeicons/primeicons.css'
import '../styles/mainHeader.css'
import logo from '../assets/logo2.png'

const styles = {
    root : {
        display : 'flex',
        backgroundColor : '#fffccc',
        flexDirection : 'row',
        padding : 10,
        // width : '100%'
    },
    logo : {
        flex : 1,
    }
}
const MainHeader = () => {
    
    return (
        <div className = 'root' style = {styles.root}>
            <div style = {styles.logo}>
                <img alt = 'MagoEat' src = {logo} />
            </div>
            
            <div className = 'controlZone'>
                <i className = 'pi pi-sign-out' style = {{ fontSize : '1.5em' }}></i>
            </div>
        </div>
    )
}

export default MainHeader;