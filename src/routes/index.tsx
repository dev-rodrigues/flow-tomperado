import {Route, Switch} from "react-router-dom";
import Index from "../pages/home";

import Board from "../pages/board";


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/board" component={Board}/>
        </Switch>
    )
}