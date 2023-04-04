import {Route, Switch} from "react-router-dom";
import Index from "../pages/index";


export default function Routes() {
    return (
        <Switch>
            <Route path="/home" component={Index}/>
        </Switch>
    )
}