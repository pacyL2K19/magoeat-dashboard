import React from 'react';

const ConnectedUser = () => {
    return (
        <div className = 'root' style = {styles.root}> 
            <img alt = 'Admin' source = '../assets/Me.png' style = {styles.avatar}/>
            <div>
                <h2>Pacifique LINJANJA</h2>
                <h3>pacilinja2@gmail.com</h3>
                <h4>CTO Manager</h4>
            </div>
        </div>
    )
}

const styles = {
    root : {
        flex: 1,
        padding: 15,
    },
    avatar : {
        
    }
}

export default ConnectedUser;