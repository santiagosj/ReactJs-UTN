import React from 'react';
import AppHolder from '../src/components/AppHolder/AppHolder'
import {HashRouter} from 'react-router-dom'

/**
 *    
 *     
 * 
 */
const App = () => {

  
  return (
    <HashRouter className="App">
        <AppHolder />
    </HashRouter>
  );
}

export default App;
