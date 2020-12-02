  
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/home/home'
import Cadastro from '../pages/Cadastro/Cadastro'

const Routes: React.FC = () => (
   
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cad" component={Cadastro} />
        </Switch>

)

export default Routes