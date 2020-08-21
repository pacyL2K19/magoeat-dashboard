import React from 'react';

class ConnectedUser extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            connectedUser : []
        }
    }
    componentDidMount () {
        // to get the connected user and open up a session

    }
    render () {
        return (
            <div className = 'root' style = {styles.root}> 
                <img alt = 'Admin' source = '../assets/Me.png' style = {styles.avatar}/>
                <div>
                    <h2>{this.state.connectedUser.username}</h2>
                    <h3>{this.state.connectedUser.mail}</h3>
                    <h4>{this.state.connectedUser.role}</h4>
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
        borderRaduis : '25px',
        borderColor : '##00ef',
        borderWidth : '2px'
    },
    separator : {
        height : '3px',
        width : '80%',
        alignSelf : 'center',
        backgroundColor : '#efefaa'
    }
}

export default ConnectedUser;