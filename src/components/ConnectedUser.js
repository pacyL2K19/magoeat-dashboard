import React from 'react';
import profil from '../assets/Me.jpeg.png'

class ConnectedUser extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            connectedUser : {
                username : 'PacyL',
                mail : 'pacil@gmail.com',
                role : 'Admin'
            }
        }
    }
    componentDidMount () {
        // to get the connected user and open up a session

    }
    render () {
        return (
            <div className = 'root' style = {styles.root}> 
                <img alt = 'Admin' src = {profil} style = {styles.avatar}/>
                <div>
                    <h3>{this.state.connectedUser.username}</h3>
                    <h5><em>{this.state.connectedUser.mail}</em></h5>
                    <p style = {{ color : '#A4A4A4', alignSelf : 'center'}}>{this.state.connectedUser.role}</p>
                </div>
                <div style = {styles.separator}></div>
            </div>
        )
    }
}

const styles = {
    root : {
        flex: 1,
        padding: '15px',
    },
    avatar : {
        height : '50px',
        width : '50px',
        borderRaduis : '50px',
        borderColor : '##00ef',
        borderWidth : '2px',
        alignSelf : 'center'
    },
    separator : {
        height : '3px',
        width : '80%',
        alignSelf : 'center',
        backgroundColor : '#000fff'
    }
}

export default ConnectedUser;