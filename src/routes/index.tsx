import {Route, Switch} from "react-router-dom";
import Index from "../pages/home";


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Index}/>
        </Switch>
    )
}