import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';

import Navigation from './components/Navigation';
import CardSection from './components/CardSection';
import MainHeader from './components/MainHeader';

function App() {
  const styles = {
    root : {

    },
    body : {
      display : 'flex',
      flexDirection : 'row',
    },
    nav : {
      width : '300px',
    },
    main : {
      backgroundColor : '#efefef',
      display : 'flex'
    }
  }
    return (
        <div className = 'ms-Grid' dir = 'ltr'>  
          <MainHeader />
          <div style = {styles.body}>
            <div style = {styles.nav}>
              {
                /**
                 * The navigation component 
                 */
              }
            </div>
            <div style = {styles.main}>
              {
                /**
                 * The main component, depending on the selected item refering to the nav component
                 */
              }
            </div>
          </div>
        </div>
    );
}

export default App;
