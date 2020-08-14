import React from 'react';
import { Nav, initializeIcons } from '@fluentui/react'

const navigationStyles = {
    root : {
        height : '100vh',
        boxSizing : 'border-box',
        border : '1px solid #eee',
        overflowY : '10vh'
    }
}

const links = [
    {
        links : [
            {
                name : 'DashBoard',
                key : 'key1',
                url : '/',
                iconProps : {
                    iconName : 'BIDashboard',
                    styles : {
                        root : {
                            fontSize : 20,
                            color : '#106ebe',
                        },
                    }
                }
            },
            {
                name : 'Customers',
                key : 'key2',
                url : '/',
                iconProps : {
                    iconName : 'UserFollowed',
                    styles : {
                        root : {
                            fontSize : 20,
                            color : '#106ebe',
                        },
                    }
                }
            },
            {
                name : 'Restaurants',
                key : 'key3',
                url : '/',
                iconProps : {
                    iconName : 'EatDrink',
                    styles : {
                        root : {
                            fontSize : 20,
                            color : '#106ebe',
                        },
                    }
                }
            },
            {
                name : 'Registrer',
                key : 'key4',
                url : '/',
                iconProps : {
                    iconName : 'FollowUser',
                    styles : {
                        root : {
                            fontSize : 20,
                            color : '#106ebe',
                        },
                    }
                }
            },
            {
                name : 'Settings',
                key : 'key1',
                url : '/',
                iconProps : {
                    iconName : 'Settings',
                    styles : {
                        root : {
                            fontSize : 20,
                            color : '#106ebe',
                        },
                    }
                }
            },
        ],
    },
];

const Navigation = () => {
    initializeIcons ();
    return (
        <Nav
            groups = {links}
            selectedKey = 'key1'
            styles = {navigationStyles}
        />
    );
};

export default Navigation;