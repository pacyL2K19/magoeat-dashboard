import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';

import Navigation from './components/Navigation';
import CardSection from './components/CardSection';
import MainHeader from './components/MainHeader';

function App() {
    return (
        <div className = 'ms-Grid' dir = 'ltr'>  
          <MainHeader />
        </div>
    );
}

export default App;
