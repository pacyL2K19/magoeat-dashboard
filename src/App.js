import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';

import Navigation from './componenets/Navigation';
import CardSection from './componenets/CardSection';
import MainHeader from './components/MainHeader';

function App() {
    return (
        <div className = 'ms-Grid' dir = 'ltr'>  
          <MainHeader />
        </div>
    );
}

export default App;
