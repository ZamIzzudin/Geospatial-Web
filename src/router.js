// Library
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Page
import Home from './Home'
import Main from './Main'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/map" component={Main} />
            </Switch>
        </BrowserRouter>
    )
}