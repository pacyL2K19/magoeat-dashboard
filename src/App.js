import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.css';

import Navigation from './componenets/Navigation';
import CardSection from './componenets/CardSection'

function App() {
    return (
        <div className = 'ms-Grid' dir = 'ltr'>  
          <div className='ms-Grid-row'>
            <div className = 'ms-Grid-coln ms-sm1 ms-xl1'>
              <Navigation />
            </div>
            <div className = 'main-element ms-Grid-coln ms-sm11 ms-xl11'>
              <CardSection />
            </div>
            <div className = 'ms-Grid-row'>

            </div>
          </div>
        </div>
    );
}

export default App;
