import React from 'react';
import {Menu} from 'primereact/menu';

export default class Navigation extends React.Component {
    constructor (props) {
        super(props);
        this.items = [
            {
                label : '',
                items : [
                    {
                        label : 'Dashboard',
                        icon : 'pi pi-chart-ba',
                        command : () => {
                            console.log('clicked')
                        }
                    },
                    {
                        label : 'Customers',
                        icon : 'pi pi-users',
                        command : () => {
                            console.log('clicked')
                        }
                    },
                    {
                        label : 'Restaurants',
                        icon : 'pi pi-heart',
                        command : () => {
                            console.log('clicked')
                        }
                    },
                    {
                        label : 'Registrer',
                        icon : 'pi pi-user-plus',
                        command : () => {
                            console.log('clicked')
                        }
                    },
                    {
                        label : 'Settings',
                        icon : 'pi pi-cog',
                        command : () => {
                            console.log('clicked')
                        }
                    }
                ]
            }
        ]
    }
    render () {
        const styles = {
            display : 'flex'
        }
        return (
            <div style= {styles.root}>
                <Menu model = {this.items}/>
            </div>
        )
    }
}
