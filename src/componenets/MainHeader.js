import React from 'react';
import 'primeicons/primeicons.css'
import '../styles/mainHeader.css'

const MainHeader = () => {
    return (
        <div className = 'root'>
            <img alt = 'MagoEat' src = '../assets/logo2.png' />
            <div className = 'controlZone'>
                <i className = 'pi pi-sign-out' style = {{ fontSize : '2em' }}></i>
            </div>
        </div>
    )
}

export default MainHeader;