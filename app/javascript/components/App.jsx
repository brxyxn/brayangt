import React from "react"
import { Route, Switch } from "react-router-dom"
// Import components
import Index from "./Home/Index"

const App = () => {
    return(
        <Switch>
            <Route path="/" exact component={Index} />
        </Switch>
    )
}

export default App