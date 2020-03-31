import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../../pages/Home'
import Gente from '../../pages/Gente'
import MiPerfil from '../../pages/MiPerfil'

class MainContent extends Component{

   render(){
       return(
              <div className="mainContent" >
                  <Switch>
                      <Route exact path={'/'}component={Home}/>
                      <Route exact path={'/page2/Gente'}component={Gente}/>
                      <Route exact path={'/page3/MiPerfil'}component={MiPerfil}/>
                      <Redirect to="/"/>
                  </Switch>
              </div>
       )
   }
}

export default MainContent


/**
 * 
 * 
 * =============================
 * CONTENIDO PRINCIPAL CON RUTAS
 * =============================
 * 
 * 
 */