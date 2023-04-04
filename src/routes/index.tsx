import {Route, Switch} from "react-router-dom";
import Index from "../pages/index";

import Board from "../pages/board";


export default function Routes() {
    return (
        <Switch>
            <Route path="/home" component={Index}/>
            <Route path="/board" component={Board}/>
        </Switch>
    )
}