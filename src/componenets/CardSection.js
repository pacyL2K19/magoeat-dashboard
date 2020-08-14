import React from 'react';
import {
    Text,
    initializeIcons
} from '@fluentui/react';
import {
    Card
} from '@uifabric/react-cards';
import 'office-ui-fabric-react/dist/css/fabric.css';

const container = {
    display : 'flex',
    justifyContent : 'center',
    margin : '10vh 0'
}

const icon = {
    fontSize : 24,
    padding : 15,
    verticalAlign : 'middle',
    paddingLeft : 0,
    color : '#0078d4'
}

const styles = {
    cardStyle : {
        root : {
            background : 'white',
            padding: 20,
            borderTop: '5px solid #0078d4',
            width: '90%',
            maxWidth: '90%',
            margin: 'auto',
        }
    },
    header : {
        root : {
            fontSize : 20,
            fontWeight : 'bold',
        }
    },
    amount : {
        root : {
            fontSize : 26,
            paddingBottom : 20,
            paddingTop : 30,
        }
    },
    percentage : {
        root : {
            fontSize : 16,
            fontWeight : 'bold',
            color : '#0078d4',
        }
    }
};